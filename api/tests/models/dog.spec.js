const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Model Testing', () => {
  after(async function() {
    await conn.sync({ force: true });
    conn.close();
  });
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Dog model', () => {
    let name, height, weight, lifeSpan, urlImage;
    beforeEach(async () => {
      await Dog.sync({ force: true });
      name = 'Saint Bernard';
      height = '65 - 70';
      weight = '59 - 82';
      lifeSpan = '7 - 10 years';
      urlImage = 'https://cdn2.thedogapi.com/images/YQX57Kz3X.jpg';
    });
    // describe('name', () => {
    //   it('should throw an error if name is null', (done) => {
    //     Dog.create({})
    //       .then(() => done(new Error('It requires a valid name')))
    //       .catch(() => done());
    //   });
    //   it('should work when its a valid name', () => {
    //     Dog.create({ name: 'Pug' });
    //   });
    // });
    describe('Create a breed', () => {
      it('should succeed on correct data', async () => {
        const dog = await Dog.create({
          name,
          height,
          weight,
          lifeSpan,
          urlImage
        });
        const breed = dog.dataValues;
        // console.log(dog);
        expect(dog).to.exist;
        expect(breed.id).to.exist;
        expect(breed.name).to.exist;
        expect(breed.height).to.exist;
        expect(breed.weight).to.exist;
        expect(breed.lifeSpan).to.exist;
        expect(breed.urlImage).to.exist;

        expect(breed.id).to.be.a('number');
        expect(breed.name).to.be.a('string');
        expect(breed.height).to.be.a('string');
        expect(breed.weight).to.be.a('string');
        expect(breed.lifeSpan).to.be.a('string');
        expect(breed.urlImage).to.be.a('string');

        expect(breed.name).to.equal(name);
        expect(breed.height).to.equal(height);
        expect(breed.weight).to.equal(weight);
        expect(breed.lifeSpan).to.equal(lifeSpan);
        expect(breed.urlImage).to.equal(urlImage);
      });
      it('should succeed on correct data without lifeSpan and urlImage data', async () => {
        const dog = await Dog.create({
          name,
          height,
          weight
        });
        const breed = dog.dataValues;

        expect(dog).to.exist;
        expect(breed.id).to.exist;
        expect(breed.name).to.exist;
        expect(breed.height).to.exist;
        expect(breed.weight).to.exist;

        expect(breed.lifeSpan).to.be.null;
        expect(breed.urlImage).to.be.null;

        expect(breed.id).to.be.a('number');
        expect(breed.name).to.be.a('string');
        expect(breed.height).to.be.a('string');
        expect(breed.weight).to.be.a('string');

        expect(breed.name).to.equal(name);
        expect(breed.height).to.equal(height);
        expect(breed.weight).to.equal(weight);
      });
      it('should fail on undefined name', async () => {
        name = undefined;
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`notNull Violation: dog.name cannot be null`);
        }
      });
      it('should fail on null name', async () => {
        name = null;
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`notNull Violation: dog.name cannot be null`);
        }
      });
      it('should fail on empty name', async () => {
        name = '';
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`Validation error: Validation notEmpty on name failed`);
        }
      });
      it('should fail on blank name', async () => {
        name = ' \t    \n';
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`Validation error: Validation notEmpty on name failed`);
        }
      });
      it('should fail on number name', async () => {
        name = '5.3';
        try {
          const dog = await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          console.log(dog);
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`Name cannot be a number`);
        }
      });
      it('should fail on undefined height', async () => {
        height = undefined;
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`notNull Violation: dog.height cannot be null`);
        }
      });
      it('should fail on null height', async () => {
        height = null;
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`notNull Violation: dog.height cannot be null`);
        }
      });
      it('should fail on empty height', async () => {
        height = '';
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`Validation error: Validation notEmpty on height failed`);
        }
      });
      it('should fail on blank height', async () => {
        height = ' \t    \n';
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`Validation error: Validation notEmpty on height failed`);
        }
      });
      it('should fail on undefined weight', async () => {
        weight = undefined;
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`notNull Violation: dog.weight cannot be null`);
        }
      });
      it('should fail on null weight', async () => {
        weight = null;
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`notNull Violation: dog.weight cannot be null`);
        }
      });
      it('should fail on empty weight', async () => {
        weight = '';
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`Validation error: Validation notEmpty on weight failed`);
        }
      });
      it('should fail on blank weight', async () => {
        weight = ' \t    \n';
        try {
          await Dog.create({
            name,
            height,
            weight,
            lifeSpan,
            urlImage
          });
          throw Error('should not reach this point');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(`Validation error: Validation notEmpty on weight failed`);
        }
      });
    });
    
    describe('', () => {});
    describe('', () => {});
    describe('', () => {});
  });
});

// describe('', () => {});
