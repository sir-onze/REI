grammar Chat;

        social
        : value
        ;

        value
        : BEGIN infos END
        ;

        infos
        :  email username password tipo idade?  POINT 
        ;

        email
        : EMAIL COLLON STRING  
        ;

        username
        : USERNAME COLLON STRING
        ;

        password
        : PASSWORD COLLON STRING
        ;

        idade
        : IDADE COLLON INT
        ;

        tipo
        : TIPO COLLON STRING
        ;

        POINT
        :'.'
        ;

        IDADE
        :'idade'
        ;

        USERNAME
        :'username'
        ;

        PASSWORD
        :'password'
        ;

        EMAIL  
        :'email'
        ;

        TIPO
        :'tipo'
        ;

        BEGIN
        :'import user:'
        ;

        SEPARATOR
        :','
        ;

        STRING
        :[a-z|A-Z]+
        ;

        INT
        :[0-9]+
        ;

        END
        :'end import'
        ;

        COLLON
        :':'
        ;

        WS
        : [ \t\n\r] + -> skip
        ;

