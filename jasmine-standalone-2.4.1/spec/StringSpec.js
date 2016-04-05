describe('Extended String Class', function() {
    describe('method hasVowels', function() {
        it('is defined', function() {
            expect(String.hasVowels).toBeDefined();
        });

        it('is a function', function() {
            expect(String.hasVowels).toEqual(jasmine.any(Function));
        });

        it('returns true if a string contains vowels', function() {
            expect('an'.hasVowels()).toBe(true);
            expect('egg'.hasVowels()).toBe(true);
            expect('indy'.hasVowels()).toBe(true);
            expect('on'.hasVowels()).toBe(true);
            expect('up'.hasVowels()).toBe(true);
            expect('cafè'.hasVowels()).toBe(true);
            expect('an indy egg on up cafè'.hasVowels()).toBe(true);
            expect('CASE'.hasVowels()).toBe(true);
            expect('?/ENDS'.hasVowels()).toBe(true);
            expect('WITH'.hasVowels()).toBe(true);
            expect('ON'.hasVowels()).toBe(true);
            expect('UP5'.hasVowels()).toBe(true);
            expect('Combining CasEs and +?\\ 4768'.hasVowels()).toBe(true);
        });

        it('returns false if a string does not contain vowels', function() {
            expect('bcd'.hasVowels()).toBe(false);
            expect('fgh ijk'.hasVowels()).toBe(false);
            expect('LMN'.hasVowels()).toBe(false);
            expect('pqr STV'.hasVowels()).toBe(false);
            expect('wXyZ'.hasVowels()).toBe(false);
            expect('!@#$%^&()_+?'.hasVowels()).toBe(false);
            expect('2355805'.hasVowels()).toBe(false);
            expect('áéîôü'.hasVowels()).toBe(false);
        });
    });

    describe('method toUpper', function() {
        it('is defined', function() {
            expect(String.toUpper).toBeDefined();
        });

        it('is a function', function() {
            expect(String.toUpper).toEqual(jasmine.any(Function));
        });

        it('converts lower case characters to upper case', function() {
            expect('an'.toUpper()).toBe('AN');
            expect('the rain in spain'.toUpper()).toBe('THE RAIN IN SPAIN');
            expect('cOmBiNaTiOn'.toUpper()).toBe('COMBINATION');
            expect('!c@h#a$r%a^c&t*e(r)s?'.toUpper())
                .toBe('!C@H#A$R%A^C&T*E(R)S?');
            expect('num123bers456'.toUpper()).toBe('NUM123BERS456');
            expect('dìàctérícs'.toUpper()).toBe('DÌÀCTÉRÍCS');
        });

        it('no conversion on upper case and special characters', function() {
            expect('ABCD'.toUpper()).toBe('ABCD');
            expect('12345'.toUpper()).toBe('12345');
            expect('!@#$'.toUpper()).toBe('!@#$');
            expect('    '.toUpper()).toBe('    ');
        });
    });

    describe('method toLower', function() {
        it('is defined', function() {
            expect(String.toLower).toBeDefined();
        });

        it('is a function', function() {
            expect(String.toLower).toEqual(jasmine.any(Function));
        });

        it('converts upper case characters to lower case', function() {
            expect('An'.toLower()).toBe('an');
            expect('THE RAIN IN SPAIN'.toLower()).toBe('the rain in spain');
            expect('cOmBiNaTiOn'.toLower()).toBe('combination');
            expect('!C@H#A$R%A^C&T*E(R)S?'.toLower())
                .toBe('!c@h#a$r%a^c&t*e(r)s?');
            expect('NUM123BERS456'.toLower()).toBe('num123Bbers456');
            expect('DÌÀCTÉRÍCS'.toLower()).toBe('dìàctérícs');
        });

        it('no conversion on lower case and special characters', function() {
            expect('abcd'.toUpper()).toBe('abcd');
            expect('12345'.toUpper()).toBe('12345');
            expect('!@#$'.toUpper()).toBe('!@#$');
            expect('    '.toUpper()).toBe('    ');
        });
    });

    describe('method ucFirst', function() {
        it('is defined', function() {
            expect(String.ucFirst).toBeDefined();
        });

        it('is a function', function() {
            expect(String.ucFirst).toEqual(jasmine.any(Function));
        });

        it('converts first letters to upper case', function() {
            expect('an'.ucFirst()).toBe('An');
            expect('the rain in spain'.ucFirst()).toBe('The rain in spain');
            expect('cOmBiNaTiOn'.ucFirst()).toBe('COmBiNaTiOn');
            expect('!c@h#a$r%a^c&t*e(r)s?'.ucFirst())
                .toBe('!c@h#a$r%a^c&t*e(r)s?');
            expect('num123bers456'.ucFirst()).toBe('Num123bers456');
            expect('ìàctérícs'.ucFirst()).toBe('Ìàctérícs');
        });

        it('does not carry out unnessecary conversions', function() {
            expect('ABCD'.ucFirst()).toBe('ABCD');
            expect('12345'.ucFirst()).toBe('12345');
            expect('!@#$'.ucFirst()).toBe('!@#$');
            expect('    '.ucFirst()).toBe('    ');
            expect('Abott'.ucFirst()).toBe('Abott');
        });
    });

    describe('method isQuestion', function() {
        it('is defined', function() {
            expect(String.isQuestion).toBeDefined();
        });

        it('is a function', function() {
            expect(String.isQuestion).toEqual(jasmine.any(Function));
        });

        it('returns true if string is a question', function() {
            expect('word?'.isQuestion()).toBe(true);
            expect('A simple sentence?'.isQuestion()).toBe(true);
            expect('with* other% characters?'.isQuestion()).toBe(true);
            expect('???????'.isQuestion()).toBe(true);
            expect('num123bers456?!'.isQuestion()).toBe(true);
            expect('IN UPPER CASE?'.isQuestion()).toBe(true);
            expect('Ends with white space? '.isQuestion()).toBe(true);
        });

        it('returns false if string is not a question', function() {
            expect('word?%'.isQuestion()).toBe(false);
            expect('?A simple sentence'.isQuestion()).toBe(false);
            expect('!@#$*&^%'.isQuestion()).toBe(false);
            expect('??????#'.isQuestion()).toBe(false);
            expect('Eager question?!'.isQuestion()).toBe(false);
        });
    });

    describe('method words', function() {
        it('is defined', function() {
            expect(String.words).toBeDefined();
        });

        it('is a function', function() {
            expect(String.words).toEqual(jasmine.any(Function));
        });

        it('returns an array of words in string', function() {
            expect('one two three'.words())
                .toEqual(['one', 'two', 'three']);
            expect('one, two, three'.words())
                .toEqual(['one', 'two', 'three']);
            expect('a/simple/sentece'.words())
                .toEqual(['a', 'simple', 'sentence']);
            expect('word'.words())
                .toEqual(['word']);
            expect(''.words())
                .toEqual([]);
            expect(' A dog (canine) is a pet'.words())
                .toEqual(['A', 'dog', 'canine', 'is', 'a', 'pet']);
            expect('DrInK tea at Cafè'.isWords())
                .toEqual(['DrInK', 'tea', 'at', 'Cafè']);
        });
    });

    describe('method wordCount', function() {
        it('is defined', function() {
            expect(String.wordCount).toBeDefined();
        });

        it('is a function', function() {
            expect(String.wordCount).toEqual(jasmine.any(Function));
        });

        it('returns number of words in string', function() {
            expect('a b, c; d'.wordCount()).toBe(4);
            expect(''.wordCount()).toBe(0);
            expect('word'.wordCount()).toBe(1);
            expect('dìàctérícs cafè'.wordCount()).toBe(2);
            expect('a simple !@##$%^^'.wordCount()).toBe(2);
            expect('A normal sentence.'.wordCount()).toBe(3);
        });
    });

});
