import pandas as pd
import mysql.connector as sql

conn=sql.connect(host='localhost',user='root',passwd='isha@2192',database='railway')
if conn.is_connected():
    print('successfully connected')

def menu():
    print()
    print("********************************************************")
    print(       "   RAILWAY MANAGEMENT SYSTEM Project")

    print("1. Create Table Passenger")
    print("2. Add new Passenger Detail")
    print("3. Create Table traindetail")
    print("4. Add new in Train Detail")
    print("5. Show ALL from train detail")
    print("6. Show ALL from Passenger Table")
    print("7. Show PNR NO.")
    print("8. Reservation of Ticket") 
    print("9. Cancellation of Reservation")


menu()

#PNR is the abbreviation of "Passenger Name Record" and
# it is also used as booking no.

def create_passengers():
    c1=conn.cursor()
    c1.execute('create table if not exists passengers(pname varchar(30), age varchar(25),trainno varchar(30),noofpas varchar(25),cls varchar(25),destination varchar(30),amt varchar(20),status varchar(25),pnrno varchar(30))')
    print('table passengers created')

def add_passengers():
    c1=conn.cursor()
    L=[]
    pname=input("ENTER NAME: ")
    L.append(pname)
    age=input("ENTER AGE: ")
    L.append(age)
    trainno=input("ENTER TRAIN NO. : ")
    L.append(trainno)
    noofpas=input("ENTER NO. OF PASSENGERS : ")
    L.append(noofpas)
    cls=input("ENTER CLASS : ")
    L.append(cls)
    destination=input("ENTER DESTINATION : ")
    L.append(destination)
    amt=input("ENTER FARE: ")
    L.append(amt)
    status=input("ENTER STATUS: ")
    L.append(status)
    pnrno=input("ENTER pnrno. : ")
    L.append(pnrno)
    pas=(L)
    sql="insert into passengers(pname,age,trainno,noofpas,cls,destination,amt,status,pnrno)values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    c1.execute(sql,pas)
    conn.commit()
    print('Record of Passenger inserted')
    df=pd.read_sql("select * from passengers", conn)
    print(df)


def create_trainsdetail():
    c1=conn.cursor()
    c1.execute('create table if not exists trainsdetail(tname varchar(30),tnum varchar(25),source varchar(30),destination varchar(30),fare varchar(10),ac1 varchar(25),ac2 varchar(30),slp varchar(30))')
    print('table trainsdetail created')


def add_trainsdeatil():
    c1=conn.cursor()
    df=pd.read_sql("select * from trainsdetail", conn)
    print(df)
    L=[]
    tname=input("ENTER TRAIN NAME : ")
    L.append(tname)
    tnum=input("ENTER NUMBER OF TRAIN: ")
    L.append(tnum)
    source=input("ENTER SOURCE OF TRAIN: ")
    L.append(source)
    destination=input("ENTER DESTINATION OF TRAIN: ")
    L.append(destination)
    fare=input("ENTER FARE OF STATION: ")
    L.append(fare)
    ac1=input("ENTER No. OF SEATS FOR AC1: ")
    L.append(ac1)
    ac2=input("ENTER No. OF SEATS FOR AC2: ")
    L.append(ac2)
    slp=input("ENTER No. OF SEATS FOR SLEEPER : ")
    L.append(slp)
    f=(L)
    sql="insert into trainsdetail(tname,tnum,source,destination,fare,ac1,ac2,slp)values(%s,%s,%s,%s,%s,%s,%s,%s)"
    c1.execute(sql,f)
    conn.commit()
    print('Record inserted in Trains Detail')


def showtrainsdetail():
    print('ALL TRAINS DETAIL')
    df=pd.read_sql("select * from trainsdetail",conn)
    print(df)

def showpassengers():
    print('ALL PASSENGERS DETAIL')
    df=pd.read_sql("select * from passengers ", conn)
    print(df)    

def disp_pnrno():
    print("PNR STATUS WINDOW")
    a=input("Enter Train No. : ")
    qry="select pname,status from passengers where trainno=%s;"%(a,)
    df=pd.read_sql(qry,conn)
    print(df)


def ticketreservation():
    print("WE HAVE THE FOLLOWING SEAT TYPE FOR YOU :- ")
    print("TNAME is 1 FOR GOA EXPRESS FROM NEW DELHI :- ")
    print()
    print("1. FIRST CLASS AC RS 6000 Per PERSON")
    print("2. SECOND CLASS AC RS 5000 Per PERSON")
    print("3. THIRD CLASS AC RS 4000 Per PERSON")
    print("4. FOR SLEEPER RS 3000 Per PERSON")
    print()
    print("TNAME is 2 FOR JAMMU EXPRESS FROM NEW DELHI:-")
    print()
    print("1. FIRST CLASS AC RS 10000 Per PERSON")
    print("2. SECOND CLASS AC RS 9000 Per PERSON")
    print("3. THIRD CLASS AC RS 8000 Per PERSON")
    print("4. FOR SLEEPER RS 7000 Per PERSON")

    tname = input("ENTER YOUR CHOICE of TRAIN NAME PLEASE->")
    print(tname)
    x = int(input("ENTER YOUR CHOICE of TICKET PLEASE->"))
    n = int(input("HOW MANY TICKETS YOU NEED :"))

    if tname == '1':
        if x == 1:
            print("YOU HAVE Chosen FIRST CLASS AC TICKET")
            s = 6000 * n
        elif x == 2:
            print("YOU HAVE Chosen SECOND CLASS AC TICKET")
            s = 5000 * n 
        elif x == 3:
            print("YOU HAVE Chosen THIRD CLASS AC TICKET")
            s = 4000 * n 
        elif x == 4:
            print("YOU HAVE Chosen SLEEPER TICKET")
            s = 3000 * n
        else:
            print("Invalid option")
            return
    elif tname == '2':
        if x == 1:
            print("YOU HAVE Chosen FIRST CLASS AC TICKET")
            s = 10000 * n
        elif x == 2:
            print("YOU HAVE Chosen SECOND CLASS AC TICKET")
            s = 9000 * n 
        elif x == 3:
            print("YOU HAVE Chosen THIRD CLASS AC TICKET")
            s = 8000 * n 
        elif x == 4:
            print("YOU HAVE Chosen SLEEPER TICKET")
            s = 7000 * n
        else:
            print("Invalid option")
            return
    else:
        print("Invalid option for train")

    print("your TOTAL TICKET PRICE is =", s, "\n") 

def cancel():
    print('Before any changes in STATUS')
    df=pd.read_sql("select * from passengers",conn)
    print(df)
    mc=conn.cursor()
    mc.execute("update passengers set status='cancelled' where pnrno='G1001'")
    #conn.commit()
    df=pd.read_sql("select * from passengers",conn)
    print(df)

opt=""
opt=int(input("Enter your choice: "))
if opt==1:
    create_passengers()
if opt==2:
    add_passengers()
if opt==3:
    create_trainsdetail()
if opt==4:
    add_trainsdeatil()
if opt==5:
    showtrainsdetail()

elif opt==6:
    showpassengers()
elif opt==7:
    disp_pnrno()
elif opt==8:
    ticketreservation()
elif opt==9:
    cancel()
elif opt>=10:
    print('Invalid option')                
            


























