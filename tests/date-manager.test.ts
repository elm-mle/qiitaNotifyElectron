import {DateManager} from "../src/main/date-manager";

describe("データマネージャーテスト", ()=>{
    const dateManager = new DateManager();

    test('指定の時間を超える', ()=>{
        const now = new Date(2021, 3,29,11,0,0);
        const date = new Date(2021, 3,29,12,1,0 );
        const actual = dateManager.isOverTime({
            source: now,
            destination: date,
            limitHours: 1
        });

        expect(actual).toBe(true);
    });

    test('指定の時間を超えない', ()=>{
        const now = new Date(2021, 3,29,11,0,0);
        const date = new Date(2021, 3,29,12,0,0 );
        const actual = dateManager.isOverTime({
            source: now,
            destination: date,
            limitHours: 1
        });
        expect(actual).toBe(false);
    });

    test('指定の時間と一緒', ()=>{
        const now = new Date(2021, 3,29,11,0,0);
        const date = new Date(2021, 3,29,11,0,0 );
        const actual = dateManager.isOverTime({
            source: now,
            destination: date,
            limitHours: 1
        });
        expect(actual).toBe(false);
    });
});
