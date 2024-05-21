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

INSERT INTO restaurants (end_hour, res_like, start_hour, res_d, res_image, res_location, res_logo, res_name) VALUES
                                                                                                                 ('22:00:00', 120, '10:00:00', 'An unpretentious restaurant specializing in burgers, steaks, seafood, original meat dishes and wine.', 'https://visitmalopolska.pl/documents/20194/2407893/Wn%C4%99trze+Restauracja+Karakter+Krak%C3%B3w/7f3a846d-eb29-4649-9c5b-8ce596cb136b?t=1646222021501&imageThumbnail=5', 'Brzozowa 17, 31-050 Kraków', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnBUwuTueRMldciF13hqx6ErhagXmW5MOqJzyQZp0_A&s', 'Karakter'),
                                                                                                                 ('23:00:00', 85, '11:00:00', 'An elegant restaurant with a terrace and exposed brick walls serving innovative versions of local dishes, desserts and wine.', 'https://assets.superprezenty.pl/files/uploaded/programs/80df77663fe54ab18d548389eee1493c.jpeg', 'Grodzka 63, 31-044 Kraków', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwGyJQlQpkvPBsGeFFFaIXOEdKhrSCziJM-hBsep3jw&s', 'Fiorentina'),
                                                                                                                 ('21:30:00', 95, '11:30:00', 'Hard Rock Cafe Kraków is located in the very heart of old Krakow, at the Main Market Square, next to St. Mary''s Basilica. Its windows offer a view of the Krakow Market Square and the Cloth Hall.', 'https://www.hardrockcafe.com/location/warsaw/pl/files/5598/IMG_9729.JPG', 'Mariacki Square 9, 31-042 Kraków', 'https://findvectorlogo.com/wp-content/uploads/2022/01/hard-rock-cafe-vector-logo-2022.png', 'Hard Rock Cafe'),
                                                                                                                 ('21:30:00', 55, '11:30:00', 'For over 20 years, the Pod Różą Restaurant has been proud of its original cuisine, inspired by international sources. There is also no shortage of Polish, savory products and a modern approach to native cuisine. ', 'https://hotel.com.pl/cms/hpr/images/restaurants/podroza/galeria/images/image_1.jpg?87', 'Floriańska 14, 31-021 Kraków', 'https://mertz.travel/wp-content/uploads/2021/06/poroza.png', 'Pod Różą'),
                                                                                                                 ('21:30:00', 75, '11:30:00', 'We want the visit in our restaurant to become a true culinary experience. The dishes are prepared in front of our guests and refined in every way.', 'https://visitmalopolska.pl/documents/20194/2682896/Restauracja+Bottiglieria+1881+Krak%C3%B3w/7b413953-44e3-4a70-af2f-e78ece6e2729?t=1683540482808&imageThumbnail=5', 'Bocheńska 5, 31-061 Kraków', 'https://gronda.com/_next/image?url=https%3A%2F%2Fd2bn8tb344j6vy.cloudfront.net%2Fbottiglieria-1881-r4u%2Fprofile%2F21137_1147772378332396_902898791759576915437516270065494487.jpg&w=256&q=75', 'Bottiglieria 1881');

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