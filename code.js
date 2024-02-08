function binarySearch(list, element) {
    if (list.length == 0){
        return -1;
    }
    var mid = Math.floor((list.length - 1) / 2); // Used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor for understanding this function
    if (list[mid] == element){
        while (list[mid - 1] == element && mid > 0){ // Used Chat GPT to help me figure out the necessary logic for duplicant entries in lists here
            mid--;
        }
        return mid;
    } else if (list[mid] > element){
        var newList = list.slice(0, mid); 
        var index = binarySearch(newList, element);
        return index;
    } else if (list[mid] < element){
        var newList = list.slice(mid + 1); 
        var index = binarySearch(newList, element);
        if (index == -1){
            return -1;
        } else {
        return mid + 1 + index;
        }
    }
}
