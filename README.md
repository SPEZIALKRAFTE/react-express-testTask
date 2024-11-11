
# React-Express-MySQL-NodeJS


## MySQL Table


```bash
create table expenses(
    id int not null auto_increment,
    date_time datetime NOT NULL DEFAULT current_timestamp,
    nameOfThing varchar(15),
    author varchar(15),
    sum int,
    category int,
    commenting varchar(500),
    primary key (id));          
```
    
