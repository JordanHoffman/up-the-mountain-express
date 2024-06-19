const gorgan_Obj = {
    "imgUrl": "http://localhost:5173/@fs/src/assets/beast_hero_1_sv.png",
    "folder": "sprites",
    "width": 432,
    "height": 288,
    "columns": 9,
    "rows": 6,
    "animations": {
        "walk": {
            "frames": [
                {
                    "row": 0,
                    "column": 6,
                    "reflectX": true,
                    "duration": 10
                },
                {
                    "row": 0,
                    "column": 7,
                    "reflectX": true,
                    "duration": 10
                },
                {
                    "row": 0,
                    "column": 8,
                    "reflectX": true,
                    "duration": 10
                },
                {
                    "row": 0,
                    "column": 7,
                    "reflectX": true,
                    "duration": 10
                }
            ]
        },
        "slash": {
            "frames": [
                {
                    "row": 0,
                    "column": 3,
                    "reflectX": true,
                    "duration": 3
                },
                {
                    "row": 0,
                    "column": 4,
                    "reflectX": true,
                    "duration": 4
                },
                {
                    "row": 0,
                    "column": 5,
                    "reflectX": true,
                    "duration": 3
                }
            ]
        }
    }
} 
export const gorgan = () => gorgan_Obj