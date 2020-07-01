// Given an array (arr) as an argument complete the 
//function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. 
//     Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]



//return the total number of smiling faces in the array
function cou(str)
{
    let len = str.length;
    let get_ch1="";
    let get_ch2="";
    let get_ch3="";
    let first_part,second_part,check;
    if(len <=1)
    {
        return false;
    }
    else if(len ==2)
    {
        get_ch1 = str.charAt(0);
        get_ch2 = str.charAt(1);
        return ((get_ch1==':'||get_ch1==';')&&(get_ch2==')'||get_ch2=='D'));
    }
    else if(len==3)
    {
        get_ch1 = str.charAt(0);
        get_ch2 = str.charAt(1);
        get_ch3 = str.charAt(2);
        first_part = get_ch1==':'||get_ch1==';';
        second_part = get_ch2=='~'||get_ch2=='-';
        last_part = get_ch3 ==')'||get_ch3=='D';

        check = first_part && second_part && last_part;
        return check;
    }

}
function countSmileys(arr) {
    let smile = 0;
    let len=arr.length;
    for(let i = 0;i<len;i++)
    {
        get_str = arr.shift();
        if(cou(get_str))
        {
            smile++;
        }

        get_str="";
    }
    return smile;
}
