"use strict";
/* globals AccountsAnonymousUi: true, AccountsPatchUi */

AccountsAnonymousUi = {};

AccountsAnonymousUi.wrapWithNoAnon = AccountsPatchUi.wrapWithSignedUp;

AccountsAnonymousUi._noAnonUser = AccountsPatchUi._signedUpUser;

AccountsAnonymousUi._wrapTemplateWithNoAnon =
  AccountsPatchUi._wrapTemplateWithSignedUp;
