DELETE FROM
    tickets;

DO $do$
DECLARE
    i integer;

BEGIN
    FOR i IN 1 ..25
    LOOP
    INSERT INTO
        tickets (
            title,
            distributor,
            type,
            event,
            date,
            quantity,
            price
        )
    VALUES
        (
            'title-' || CAST(i as TEXT),
            'some distributor',
            'MOVIE',
            null,
            CURRENT_DATE,
            10 + i,
            ROUND((10 + (RANDOM() * 500)) :: numeric, 2)
        );

END
LOOP
;

END $do$;