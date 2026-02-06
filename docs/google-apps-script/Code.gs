/**
 * Google Apps Script for SkyFynd BuildMyPlan Quote Requests
 *
 * Setup:
 * 1. Open your Google Sheet → Extensions → Apps Script
 * 2. Paste this code into Code.gs
 * 3. Run setupSheet() once to create headers
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL into .env.local as GOOGLE_APPS_SCRIPT_URL
 *
 * IMPORTANT: After updating this code, you must create a NEW deployment
 * (Deploy → Manage deployments → New version) for changes to take effect.
 */

var SHEET_NAME = 'Quote Requests';
var MAX_SERVICES = 5;

function getHeaders() {
  var headers = [
    'Timestamp',        // A
    'Source',           // B
    'Name',             // C
    'Email',            // D
    'Company',          // E
    'Phone',            // F
    'Notes',            // G
    'Service Count',    // H
    'Service Names',    // I
    'Has Custom Quote', // J
    'One-Time Total',   // K
    'Monthly Total',    // L
    'Discount %',       // M
    'Grand Total'       // N
  ];

  // Add per-service columns (3 cols each × MAX_SERVICES)
  for (var i = 1; i <= MAX_SERVICES; i++) {
    headers.push('Service ' + i + ' Name');
    headers.push('Service ' + i + ' One-Time');
    headers.push('Service ' + i + ' Monthly');
  }

  return headers;
}

/**
 * Run this function once to create the sheet with headers.
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  var headers = getHeaders();

  // Set headers in first row
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4a148c');
  headerRange.setFontColor('#ffffff');

  // Auto-resize columns
  for (var i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }

  // Set wider widths for key columns
  sheet.setColumnWidth(7, 250);  // Notes
  sheet.setColumnWidth(9, 300);  // Service Names
}

/**
 * Extracts a readable name for each service from the servicesDetail array.
 * Handles both tier-based (Main Page) and builder-based (Custom Builder) formats.
 */
function getServiceName(detail) {
  // Tier-based: has serviceName and tier
  if (detail.serviceName) {
    var tier = detail.tier ? ' (' + detail.tier.charAt(0).toUpperCase() + detail.tier.slice(1) + ')' : '';
    return detail.serviceName + tier;
  }
  // Builder-based: has serviceLabel
  if (detail.serviceLabel) {
    return detail.serviceLabel;
  }
  return 'Unknown Service';
}

/**
 * Gets the one-time price from a service detail.
 */
function getOneTimePrice(detail) {
  // Tier-based
  if (detail.subtotal !== undefined) return detail.subtotal;
  // Builder-based
  if (detail.oneTimeTotal !== undefined) return detail.oneTimeTotal;
  return 0;
}

/**
 * Gets the monthly price from a service detail.
 */
function getMonthlyPrice(detail) {
  // Builder-based
  if (detail.monthlyTotal !== undefined) return detail.monthlyTotal;
  // Tier-based services don't have monthly
  return 0;
}

/**
 * Handles POST requests from the Next.js API route.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet with headers if it doesn't exist
    if (!sheet) {
      setupSheet();
      sheet = ss.getSheetByName(SHEET_NAME);
    }

    var row = [
      new Date().toISOString(),                                    // Timestamp
      data.source || '',                                           // Source
      data.name || '',                                             // Name
      data.email || '',                                            // Email
      data.company || '',                                          // Company
      data.phone || '',                                            // Phone
      data.notes || '',                                            // Notes
      data.serviceCount || 0,                                      // Service Count
      data.serviceNames || '',                                     // Service Names
      data.hasCustomQuote ? 'TRUE' : 'FALSE',                     // Has Custom Quote
      data.oneTimeTotal || 0,                                      // One-Time Total
      data.monthlyTotal || 0,                                      // Monthly Total
      data.discountPercentage || 0,                                // Discount %
      data.grandTotal || 0                                         // Grand Total
    ];

    // Add per-service columns
    var services = data.servicesDetail || [];
    for (var i = 0; i < MAX_SERVICES; i++) {
      if (i < services.length) {
        var detail = services[i];
        row.push(getServiceName(detail));
        row.push(getOneTimePrice(detail));
        row.push(getMonthlyPrice(detail));
      } else {
        row.push('');
        row.push('');
        row.push('');
      }
    }

    sheet.appendRow(row);

    // Format currency columns for the new row
    var lastRow = sheet.getLastRow();
    // One-Time Total (K), Monthly Total (L), Grand Total (N)
    sheet.getRange(lastRow, 11).setNumberFormat('$#,##0');
    sheet.getRange(lastRow, 12).setNumberFormat('$#,##0');
    sheet.getRange(lastRow, 14).setNumberFormat('$#,##0');

    // Format per-service price columns
    for (var j = 0; j < MAX_SERVICES; j++) {
      var oneTimeCol = 15 + (j * 3) + 1; // Service N One-Time
      var monthlyCol = 15 + (j * 3) + 2; // Service N Monthly
      sheet.getRange(lastRow, oneTimeCol).setNumberFormat('$#,##0');
      sheet.getRange(lastRow, monthlyCol).setNumberFormat('$#,##0');
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Quote saved' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
