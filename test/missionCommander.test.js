const MissionCommander = require('./../app/missionCommander');
describe("Unit Tests for Mission Commander Class", () => {
  test('1) Create a mission commander objet', () => {
      const result = "Woopa" 
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })
  const myMissionCommander = new MissionCommander("Woopa")
  