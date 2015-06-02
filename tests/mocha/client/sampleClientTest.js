if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("a group of tests", function(){
      it("should respect equality", function(){
        chai.assert.equal(5,5);
      });
      it("should get a count of tasks", function(){
        tasks = Tasks.find({});
        tasks.forEach(function(task){ Tasks.remove(task._id); });
        chai.assert.equal(Tasks.find({}).count(), 0);
        Tasks.insert({text: 'do something', createdAt: new Date()});
        chai.assert.equal(Tasks.find({}).count(), 1);
      });
      it("should find a task with text", function(){
        tasks = Tasks.find({});
        tasks.forEach(function(task){ Tasks.remove(task._id); });
        chai.assert.equal(Tasks.find({}).count(), 0);
        Tasks.insert({text: 'do something', createdAt: new Date()});
        chai.assert.equal(Tasks.findOne().text, 'do something');
      });
      it("should fail to insert a task without text", function(){
        tasks = Tasks.find({});
        tasks.forEach(function(task){ Tasks.remove(task._id); });
        chai.assert.equal(Tasks.find({}).count(), 0);
        Tasks.insert({createdAt: new Date()});
        chai.assert.equal(Tasks.find({}).count(), 0);
      });
    });
  });
}
