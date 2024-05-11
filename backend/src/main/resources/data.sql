INSERT INTO categories (category_name) VALUES
                                           ('Fast Food'),
                                           ('Włoska'),
                                           ('Japońska');

INSERT INTO restaurants (end_hour, res_like, start_hour, res_d, res_image, res_location, res_logo, res_name) VALUES
                                                                                                                 ('22:00:00', 120, '10:00:00', 'ul. Główna 123', 'restauracja1.jpg', 'Nowy Jork', 'logo1.jpg', 'Burger Palace'),
                                                                                                                 ('23:00:00', 85, '11:00:00', 'ul. Lipowa 456', 'restauracja2.jpg', 'Los Angeles', 'logo2.jpg', 'Pizza Italia'),
                                                                                                                 ('21:30:00', 95, '11:30:00', 'ul. Dębowa 789', 'restauracja3.jpg', 'Chicago', 'logo3.jpg', 'Sushi World');

INSERT INTO restaurants_categories (category_id, res_id) VALUES
                                                             (1, 1),
                                                             (2, 2),
                                                             (3, 3);

INSERT INTO types (name) VALUES
                             ('Admin'),
                             ('Zwykły');

INSERT INTO users (email, name, password, surname) VALUES
                                                       ('admin@example.com', 'Admin', 'admin123', 'Adminowski'),
                                                       ('uzytkownik1@example.com', 'Jan', 'hasło123', 'Kowalski'),
                                                       ('uzytkownik2@example.com', 'Anna', 'qwerty456', 'Nowak');

INSERT INTO user_types (type_id, user_id) VALUES
                                              (1, 1),
                                              (2, 2),
                                              (2, 3);

INSERT INTO reservation (date, hour, number_of_people, res_id, user_id) VALUES
                                                                            ('2024-05-15', '18:30:00', 4, 1, 2),
                                                                            ('2024-05-16', '19:00:00', 3, 2, 3),
                                                                            ('2024-05-17', '20:00:00', 5, 3, 3);

INSERT INTO notifications (reserv_id, user_id, message) VALUES
                                                            (1, 2, 'Twoja rezerwacja w Burger Palace została potwierdzona przez restaurację.'),
                                                            (2, 3, 'Twoja rezerwacja w Pizza Italia została potwierdzona przez restaurację.'),
                                                            (3, 3, 'Twoja rezerwacja w Sushi World została potwierdzona przez restaurację.');