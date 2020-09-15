// given a substring and a srting
// determine if the string contains all the characters of the substring
// in the same order they appear in the substring

// isSubstring("ab", "abc") => true
// isSubstring("ba", "abc") => false
// isSubstring("ac", "abc") => true

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    