#include<stdio.h>
int main(){
int b, c, i;
printf("Enter the number of Rows.\n");
scanf("%d", &i);
for(b=1;b<=i;b++){
    for(c=1;c<=2*i-1;c++){
        if(c>=i-(b-1) && c<= i+(b-1))
            printf("*");
        else
            printf(" ");
    }
    printf("\n");
}
return 0;
}
