/**
 * Custom sort table
 * auther jewelchen
 */
//msr order definition
const orderDef = ["1", "2", "3+", "3", "4+", "4", "4-", "5+", "5", "5-", "6+", "6", "6-", "7+", "7", "8", "9", "W1", "W2", "D", "N", "Z"]; 
    
export class costomSort {
    constructor(){}
}
export function getSortedData(id, order, value) {
  if(order === '0')
    return value;
  
  switch(id) { 
    case 'msr': { 
      if (order === '1')
        return  sort_MSR_ASC(id, value);
      else
        return sort_MSR_DESC(id, value);
      break; 
    } 
    default: { 
      if (order === '1')
        return sort_COMMON_ASC(id, value);
      else 
        return sort_COMMON_DESC(id, value);
      break; 
    } 
  } 
}
function sort_MSR_ASC(id, value){
  value.sort((x, y) => {
      if (get_MSR_order(x.msr) < get_MSR_order(y.msr)) 
        return -1;
      if (get_MSR_order(x.msr) > get_MSR_order(y.msr)) 
        return 1;
      return 0;
    });
  return value;
}
function sort_MSR_DESC(id, value){
    value.sort((x, y) => {
        if (get_MSR_order(x.msr) > get_MSR_order(y.msr)) {
          return -1;
        }
        if (get_MSR_order(x.msr) < get_MSR_order(y.msr)) {
          return 1;
        }
        return 0;
      });
      return value;
}
function sort_COMMON_ASC(id, value) {
    value.sort((x, y) => {
        if (x[id] < y[id]) {
          return -1;
        }
        if (x[id] > y[id]) {
          return 1;
        }
        return 0;
      });
      return value;
}
function sort_COMMON_DESC(id, value) {
  value.sort((x, y) => {
      if (x[id] > y[id]) {
        return -1;
      }
      if (x[id] < y[id]) {
        return 1;
      }
      return 0;
    });
    return value;
}
function get_MSR_order(value) {
    for(let i in orderDef){
        if (value === orderDef[i])
             return orderDef.indexOf(value);
    }
    return(100);
}