import FindGroupIndex from './FindGroupIndex';

var GroupOptions = function GroupOptions(options) {
  var nextOptions = [];
  options.forEach(function (option, i) {
    if ('groupId' in option) {
      var nextOption = Object.assign({}, option);
      var groupIndex = FindGroupIndex(nextOptions, nextOption.groupId);
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

export default GroupOptions;