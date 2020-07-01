function get_mod(val,a)
{
    let res = 0;

    for (let index = 0; index < val.length; index++) {
        ch = val.charAt(index);
        ch = parseInt(ch);
        res = (res*10 +ch ) %a;
        ch=""; 
    }
    return res;
}

var lastDigit = function(str1, str2){

    let arr=[ 
    [0],
    [1],
    [2,4,8,6],
    [3,9,7,1],
    [4,6],
    [5],
    [6],
    [7,9,3,1],
    [8,4,2,6],
    [9,1]
];

    if(str1=='0'&&str2!='0')
    {
        return 0;
    }
    if(str2=='0'&& str1=='0')
    {
        return 1;
    }
    else if(str2=='0')
    {
        return 1;
    }
    let ten=10;
    let get_num= parseInt(str1);
    //console.log();
    let last_digit= get_mod(str1,ten);
    let power = parseInt(str2);
    let len;
    let mod = get_mod(str2, arr[last_digit].length);
  //  console.log(mod);
    if(mod==0)
    {
        len = arr[last_digit].length-1;
        return arr[last_digit][len];
    }
    else
    {
        len =mod-1;
        return arr[last_digit][len];
    } // fix me
  }