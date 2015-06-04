if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(){
        chai.assert(Meteor.release);
      });
      it("should fail to insert a task without a date", function(){
        tasks = Tasks.find({});
        tasks.forEach(function(task){ Tasks.remove(task._id); });
        chai.assert.equal(Tasks.find({}).count(), 0);
        Tasks.insert({text: 'do something'});
        chai.assert.equal(Tasks.find({}).count(), 0);
      });
    });
  });
}
