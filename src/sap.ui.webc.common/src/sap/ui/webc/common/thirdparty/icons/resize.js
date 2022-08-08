sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/resize", "./v4/resize"], function (_exports, _Theme, _resize, _resize2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _resize.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _resize.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _resize.pathData : _resize2.pathData;
  _exports.pathData = pathData;
  var _default = "resize";
  _exports.default = _default;
});