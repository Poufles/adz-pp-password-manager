import { DateDifference } from "./date";

const FilterRecent = function() {

    /**
     * Sort items for recents
     * @param {Array} dataArr - Array containg data objects of RecentKeyItems 
     * @returns Sorted dataArr
     */
    const sortItems = (dataArr) => {
        const length = dataArr.length;
        let isSorted = false;
        let currentObject;
        let nextObject;
        let currentObjectData;
        let nextObjectData;
        let currentOpenedAt;
        let nextOpenedAt;
        let currentMS;
        let nextMS;
        
        while (!isSorted) {
            isSorted = true;
            for (let i = 0; i < length - 1; i++) {
                currentObject = dataArr[i];
                nextObject = dataArr[i + 1];

                currentObjectData = currentObject.getItemData().item;
                nextObjectData = nextObject.getItemData().item;

                currentOpenedAt = currentObjectData.openedAt;
                nextOpenedAt = nextObjectData.openedAt;

                currentMS = DateDifference({
                    date: currentOpenedAt,
                    type: 'millisecond'
                });
                nextMS = DateDifference({
                    date: nextOpenedAt,
                    type: 'millisecond'
                });

                if (currentMS > nextMS) {
                    [dataArr[i], dataArr[i + 1]] = [dataArr[i + 1], dataArr[i]];
                    isSorted = false; 
                };

            };
        };

        return dataArr;
    };

    return { sortItems };
}();

export default FilterRecent;