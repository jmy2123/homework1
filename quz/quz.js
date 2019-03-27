/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	var temp = A
  for (; temp != null; temp = temp.tail) {
    if(temp.tail === null) {
      temp.tail = B
      break
    }
  }
  return A
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var _newlist, _list
	var temp = L
	var end = start + len
	for (var i = 0; temp != null; temp = temp.tail, i++) {
		if (i < start) {
			continue
		} else if (i === start) {
			_newlist = new List(temp.head)
			_list = _newlist
		} else if (i > start && i < end) {
			_list.tail = new List(temp.head)
			_list = _list.tail
		} else if (i >= end) {
			break
		}
	}
	return _newlist
}
