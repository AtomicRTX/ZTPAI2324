INSERT INTO categories (category_name) VALUES
                                           ('italian'),
                                           ('indian'),
                                           ('sushi'),
                                           ('mexican'),
                                           ('thai'),
                                           ('vietnamese'),
                                           ('seafood'),
                                           ('chinese'),
                                           ('burgers'),
                                           ('vegetarian');

INSERT INTO restaurants (end_hour, res_like, start_hour, res_d, res_logo, res_location, res_map, res_name) VALUES
                                                                                                                 ('22:00:00', 120, '10:00:00', 'An unpretentious restaurant specializing in burgers, steaks, seafood, original meat dishes and wine.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnBUwuTueRMldciF13hqx6ErhagXmW5MOqJzyQZp0_A&s', 'Brzozowa 17, 31-050 Kraków', '!1m18!1m12!1m3!1d2561.761959660187!2d19.941030357790808!3d50.05329034267609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6aeafe6949%3A0xc8fa79e2b4eb822a!2sKarakter!5e0!3m2!1spl!2spl!4v1716390897279!5m2!1spl!2spl', 'Karakter'),
                                                                                                                 ('23:00:00', 85, '11:00:00', 'An elegant restaurant with a terrace and exposed brick walls serving innovative versions of local dishes, desserts and wine.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwGyJQlQpkvPBsGeFFFaIXOEdKhrSCziJM-hBsep3jw&s', 'Grodzka 63, 31-044 Kraków', '!1m18!1m12!1m3!1d2561.6199782516846!2d19.933300357791616!3d50.0559498424869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6cd672ca9b%3A0x702939bec9f29b1b!2sFiorentina!5e0!3m2!1spl!2spl!4v1716391492544!5m2!1spl!2spl', 'Fiorentina'),
                                                                                                                 ('21:30:00', 95, '11:30:00', 'Hard Rock Cafe Kraków is located in the very heart of old Krakow, at the Main Market Square, next to St. Mary''s Basilica. Its windows offer a view of the Krakow Market Square and the Cloth Hall.', 'https://findvectorlogo.com/wp-content/uploads/2022/01/hard-rock-cafe-vector-logo-2022.png', 'Mariacki Square 9, 31-042 Kraków', '!1m18!1m12!1m3!1d2561.3264859029196!2d19.936191912549237!3d50.06144701517719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b11f7f882ed%3A0xc329d02df5204431!2sHard%20Rock%20Cafe!5e0!3m2!1spl!2spl!4v1716391461827!5m2!1spl!2spl', 'Hard Rock Cafe'),
                                                                                                                 ('21:30:00', 55, '11:30:00', 'For over 20 years, the Pod Różą Restaurant has been proud of its original cuisine, inspired by international sources. There is also no shortage of Polish, savory products and a modern approach to native cuisine. ', 'https://mertz.travel/wp-content/uploads/2021/06/poroza.png', 'Floriańska 14, 31-021 Kraków', '!1m18!1m12!1m3!1d2561.243364554459!2d19.937264612549317!3d50.06300381506571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b11db981d4b%3A0xfc5c948eebdc7a1b!2zSG90ZWwgUG9kIFLDs8W8xIU!5e0!3m2!1spl!2spl!4v1716391419049!5m2!1spl!2spl', 'Pod Różą'),
                                                                                                                 ('21:30:00', 75, '11:30:00', 'We want the visit in our restaurant to become a true culinary experience. The dishes are prepared in front of our guests and refined in every way.', 'https://gronda.com/_next/image?url=https%3A%2F%2Fd2bn8tb344j6vy.cloudfront.net%2Fbottiglieria-1881-r4u%2Fprofile%2F21137_1147772378332396_902898791759576915437516270065494487.jpg&w=256&q=75', 'Bocheńska 5, 31-061 Kraków', '!1m18!1m12!1m3!1d2562.0112360260423!2d19.943557112548763!3d50.04862081609561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b4210bb313b%3A0x76f1fb84befaeb6b!2sBottiglieria%201881!5e0!3m2!1spl!2spl!4v1716391374823!5m2!1spl!2spl', 'Bottiglieria 1881');

INSERT INTO restaurants_categories (category_id, res_id) VALUES
                                                             (1, 1),
                                                             (2, 1),
                                                             (3, 1),
                                                             (4, 1),
                                                             (5, 1),
                                                             (6, 1),
                                                             (7, 1),
                                                             (8, 1),
                                                             (9, 1),
                                                             (2, 2),
                                                             (3, 3),
                                                             (10, 3),
                                                             (2, 5);

INSERT INTO types (name) VALUES
                             ('Admin'),
                             ('Zwykły');

INSERT INTO users (email, name, password, surname) VALUES
                                                       ('admin@gmail.com', 'Admin', '$2a$10$yfrIrrMSA1bYC8xygT5CSOySzxk7IE7g4szKKvdEv87oxZ1n7N3Au', 'Adminowski'),
                                                       ('dawid.kowalski@gmail.com', 'Dawid', '$2a$10$z/4b1mAiFfr8IaEKj0quluZn9OdbcbfLKtc198Czn9HiM/KjU3PSe', 'Kowalski'),
                                                       ('anna.nowak@gmail.com', 'Anna', '$2a$10$bamhHmGppUfCJIrmV4xu2Om8FnfCO9r62SAz0RDOiIaVUsrNCvkNG', 'Nowak');

INSERT INTO user_types (type_id, user_id) VALUES
                                              (1, 1),
                                              (2, 2),
                                              (2, 3);

INSERT INTO reservation (date, hour, number_of_people, res_id, user_id) VALUES
                                                                            ('2024-05-15', '18:30:00', 4, 1, 2),
                                                                            ('2024-05-16', '19:00:00', 3, 2, 3),
                                                                            ('2024-05-17', '20:00:00', 5, 3, 3);

INSERT INTO notifications (reserv_id, user_id, message) VALUES
                                                            (1, 2, 'Twoja rezerwacja została potwierdzona przez restaurację.'),
                                                            (2, 3, 'Twoja rezerwacja została potwierdzona przez restaurację.'),
                                                            (3, 3, 'Twoja rezerwacja została potwierdzona przez restaurację.');