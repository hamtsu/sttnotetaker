export default function findDiff(str1, str2) {
    let diff = "";
    str2.split('').forEach(function(val, i) {
      if (val != str1.charAt(i))
        diff += val;
    });
    
    return diff;
  }