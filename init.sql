create table categories
(
    category_id   serial
        primary key,
    category_name varchar(255) not null
        unique
);

create table restaurants
(
    end_hour     time(6),
    res_id       serial
        primary key,
    res_like     integer,
    start_hour   time(6),
    res_d        varchar(255),
    res_image    varchar(255),
    res_location varchar(255),
    res_logo     varchar(255),
    res_name     varchar(255)
);

create table restaurants_categories
(
    category_id integer not null
        constraint fklc6vudme5q0t2d9uqbs12c1x9
            references categories,
    res_id      integer not null
        constraint fk8gj9uh2u3u3fbbm5b76vncyd7
            references restaurants,
    primary key (category_id, res_id)
);

create table types
(
    type_id serial
        primary key,
    name    varchar(255) not null
        unique
);

create table users
(
    user_id  serial
        primary key,
    email    varchar(255) not null
        unique,
    name     varchar(255) not null,
    password varchar(255) not null,
    surname  varchar(255) not null
);

create table reservation
(
    date             date    not null,
    hour             time(6) not null,
    number_of_people integer not null,
    res_id           integer not null
        constraint fk4h7gy77p1nk5b000akav4voco
            references restaurants,
    reserv_id        serial
        primary key,
    user_id          integer not null
        constraint fkrea93581tgkq61mdl13hehami
            references users
);

create table user_types
(
    type_id integer not null
        constraint fk963qrkftu4i1746omlqcy95g7
            references types,
    user_id integer not null
        constraint fkiaxlg5wn4xsgb8null7t6d7be
            references users,
    primary key (type_id, user_id)
);

create table likes
(
    like_id serial
        primary key,
    res_id  integer not null
        constraint fkngx3e7jjqk5mjgxa9kevuljf1
            references restaurants,
    user_id integer not null
        constraint fknvx9seeqqyy71bij291pwiwrg
            references users
);
