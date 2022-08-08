sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/blank-tag", "./v4/blank-tag"], function (_exports, _Theme, _blankTag, _blankTag2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _blankTag.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _blankTag.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _blankTag.pathData : _blankTag2.pathData;
  _exports.pathData = pathData;
  var _default = "blank-tag";
  _exports.default = _default;
});