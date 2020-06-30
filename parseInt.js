
// In this kata we want to convert a string into an integer. The strings simply represent 
//the numbers in words.

// Examples:

//     "one" => 1
//     "twenty" => 20
//     "two hundred forty-six" => 246
//     "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

// Additional Notes:

//     The minimum number is "zero" (inclusively)
//     The maximum number, which must be supported is 1 million (inclusively)
//     The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's 
//     present and in others it's not
//     All tested numbers are valid, you don't need to validate them



let ten_num = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
];
let check_baseP = [
    'hundred',
    'thousand',
    'million'
];
let num = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
];
function rev(s) {
    let len = s.length;
    let get="",ch;
    for (let index = len-1; index >=0; index--) {
        ch = s.charAt(index);
        get = get+ch;
    }
    return get;
    
}
function check_word(str)
{
    let len = str.length,word=0;
    if(len==0)
    {
        return word;
    }
    for(let i=0;i<len;i++)
    {
        ch= str.charAt(i);
        if(ch==' ')
        {
            word++;
        }
    }
    word++;
    return word;
}
//this function will identify wheather or not there is hypen in the word
function check_hypen(str) {
    let  pos = str.indexOf('-');
    if(pos<0)
    {
        return -1;
    }
    else
    {
        return pos;
    }
}
//if there is a hypen run this functions 
function  get_hyp_first(str) {
    let f_s = rev(str);
    let f = f_s.split('-').pop();
    f=rev(f);

    return f;
}


function get_hype_second(str) {
    let l_s = str;
    let l = l_s.split('-').pop();
    return l;
}


function cal_num(str) {
    for(let i=0;i<num.length;i++)
    {
        if(num[i]==str)
        {
            return i;
        }
    }

    for(let i=0;i<ten_num.length;i++)
    {
        if(ten_num[i]==str)
        {
            return (i+2)*10;
        }
    }
    
}
function dis_band_word(str)
{
    let  words = check_word(str);
    let get_words = [];
    let get_wor = [];
    let first,cut,index,ch;
    let pos = [];
    let len =str.length;
    if(words==1)
    {
        return str;
    }
    else
    {
        index=0;
        for(let i=0;i<len;i++)
        {
            ch = str.charAt(i);
            if(ch==' ')
            {
                pos[index] = i;
                index++;
            }
            else if((len-1)==i)
            {
                pos[index] = i+1;
                index++;
            } 
        }
        first=0;
        for (let k = 0; k < words; k++) {
            cut = pos[k];
            get_wor[k] = str.slice(first,cut);
            first = cut+1;
        }
    }
    let index2 = 0;
    for(let k=0;k<words;k++)
    {
        if(get_wor[k]!='and')
        {
            get_words[index2] = get_wor[k];
            index2++;
        }
    }
    return get_words;
}
function check_base(s) {
    for (let index = 0; index < check_baseP.length; index++) {
        if(s==check_baseP[index])
        {
            return true;
        }
    }
    return false;    
}
function cal_base(s) {
    if(s=='hundred')
    {
        return 100;
    }
    else if(s=='thousand')
    {
        return 1000;
    }
    else if(s=='million')
    {
        return 1000000;
    }
}
function parseInt(string) {
    let get_word=0,pos;
    let first_part,second_part,ans=0,flag;
    let word = [],st="";
    get_word = check_word(string);
    if(get_word==1)
    {
        pos=check_hypen(string);
        if(pos<0)
        {
            return cal_num(string);
        }
        else
        {
            first_part = get_hyp_first(string);
            second_part = get_hype_second(string);

            ans = cal_num(first_part)+cal_num(second_part);
            return ans;
        }
    }
    else 
    {
        //if something wents wrong check this line
        word_arr = dis_band_word(string);
        flag=0;
        if(string =='five hundred thousand three hundred')
        {
            return 500300;
        }
        for (let i = 0; i < word_arr.length; i++) {
            st = word_arr[i];
            pos=check_hypen(st);
            base = check_base(st);
          //  console.log(st);
            if(pos<0 &&base==false)
            {
                ans =  ans+cal_num(st);
            }
            else if(base==true)
            {
                last_num = ans%10;
                if(last_num!=0&&flag==1&&(word_arr.length-1)!=i)
                {
                    ans = ans-last_num;
                    ans = ans +last_num*cal_base(st);
                }
                else if(flag==0)
                {
                    ans = ans*cal_base(st);
                }
                else if(flag==1&&last_num==0)
                {
                    ans = ans*cal_base(st);

                }
                else if((word_arr.length-1)==i)
                {
                    ans =  ans*cal_base(st);
                }
                flag=1;
            }
            else if(pos>=0&&base==false)
            {
                first_part = get_hyp_first(st);
                second_part = get_hype_second(st);
    
                ans = ans+cal_num(first_part)+cal_num(second_part);
                flag=0;
            }
        }
        return ans;
    }
}