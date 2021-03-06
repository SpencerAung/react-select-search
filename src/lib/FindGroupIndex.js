export default function FindGroupIndex(options, id) {
    let foundIndex = null;

    options.forEach((option, i) => {
        if ('groupId' in option && option.groupId === id) {
            foundIndex = i;
        }
    });

    return foundIndex;
}
