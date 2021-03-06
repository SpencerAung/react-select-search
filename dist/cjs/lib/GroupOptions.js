"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FindGroupIndex = _interopRequireDefault(require("./FindGroupIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupOptions = function GroupOptions(options) {
  var nextOptions = [];
  options.forEach(function (option, i) {
    if ('groupId' in option) {
      var nextOption = Object.assign({}, option);
      var groupIndex = (0, _FindGroupIndex.default)(nextOptions, nextOption.groupId);
      nextOption.index = i;

      if (groupIndex !== null && groupIndex > -1) {
        nextOptions[groupIndex].items.push(nextOption);
      } else {
        nextOptions.push({
          items: [nextOption],
          groupId: option.groupId,
          type: 'group',
          name: option.groupName
        });
      }
    } else {
      nextOptions.push(option);
    }
  });
  return nextOptions;
};

var _default = GroupOptions;
exports.default = _default;