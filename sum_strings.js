function max(x,y)
{
    if(x>y)
    {
        return x;
    }
    return y;
}
function rev(st)
{
    let l = st.length;
    let get_st= "",zero=0,ch1;
    let last = parseInt(st.charAt(l-1));
    console.log(`last ${last}`);
    for(let i=l-1;i>=0;i--)
    {
        ch1= parseInt(st.charAt(i));
        if(ch1>0)
        {
            break;
        }
        else
        {
            zero++;
        }
    }
    l = l-zero;
    for (let index = (l-1); index >=0; index--) {
        get_st = get_st+ st.charAt(index);       
    }
    return get_st;
}
function sumStrings(a,b) { 
    let len1 = a.length;
    let len2= b.length;

    let len = max(len1,len2);
    let temp_len1 = len1-1;
    let temp_len2 = len2-1;
    let add_a,add_b ,ch_a="",ch_b="";
    let sum=0,ans="",carry=0;

    let num;
    while(len--)
    {
        ch_a  = a.charAt(temp_len1);
        add_a = parseInt(ch_a);
        ch_b = b.charAt(temp_len2);
        add_b = parseInt(ch_b);
        if(temp_len2<0&&temp_len1>=0)
        {
            add_b=0;
        }
        else if(temp_len1<0&&temp_len2>=0)
        {
            add_a=0;
        }
        sum = (add_a+add_b)+carry;
        carry=0;
        console.log(sum);
        console.log(`add_a ${add_a}`);
        console.log(`add_b ${add_b}`);

        if(sum>=10&&len>0)
        {
            num = sum%10;
            carry = Math.floor(sum/10);
            ans = ans +num;
        }
        else if(sum<10&&len>=0)
        {
            ans+=sum;
        }
        else if(len==0&&sum>=10)
        {
            num = sum%10;
            ans+=num;
            carry = Math.floor(sum/10);
            ans+=carry;
            console.log(`ans ${ans}`);
        }
        temp_len1--;
        temp_len2--;
    }
    return rev(ans);
}