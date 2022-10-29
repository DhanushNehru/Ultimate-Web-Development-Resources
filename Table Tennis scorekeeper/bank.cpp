#include<iostream>
#include<stdio.h>
#include<conio.h>
using namespace std;
 
class Bank
{
    double deposit_money;
    double total_amount;
    double withdraw_money;
    int acc_no;
    char AccountHolderName[100], Account_Type[100];
    public:
        void deposit()
        {
            cout<<"Enter amount to be deposited";
            cin>>deposit_money;
            cout<<"Total amount present in your account is= "<<total_amount<<endl;
            total_amount=total_amount+deposit_money;
            cout<<"Total amount after the deposited money is= "<<total_amount<<endl;
            
        }
        void withdraw()
        {
            cout<<"Enter amount to be withdrawn";
            cin>>withdraw_amount;
            if(withdraw_amount<total_amount)
            {
                cout<<"Withdrawal of amount"<<withdraw_amount<<"successful"<<endl;
                total_amount=total_amount-withdraw_amount;
                cout<<"Total amount left is= "<<total_amount<<endl;
            }
            else
            {
                cout<<"Amount not sufficient";
            }
        }

};
int main()
{
    char name[100];
    int acc_no;

    cout<<"Enter the account holder's name"<<endl;;
    cin>>name;
    cout<<"Enter your account number"<<endl;
    cin>>acc_no;
    cout<<"Want to deposit or withdraw"<<endl;
    Bank b1;
    b1.deposit();
    
    
    
    cout<<withdraw()<<endl;
    cout<<deposit()<<endl;

    return 0;
}