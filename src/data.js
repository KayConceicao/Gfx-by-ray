import { v4 as uuidv4} from "uuid";

import process_book_01 from "./images/process_book-01.jpg";
import process_book_02 from "./images/process_book-02.jpg";
import process_book_03 from "./images/process_book-03.jpg";
import snowflake_cover from "./images/snowflake_cover.jpg";
import snowflake_01 from "./images/snowflake_01.jpg";
import snowflake_02 from "./images/snowflake_02.jpg";
import snowflake_03 from "./images/snowflake_03.jpg";
import cherry_cover from "./images/cherry_cover.jpg";
import cherry_01 from "./images/cherry_01.jpg";
import cherry_02 from "./images/cherry_02.jpg";
import cherry_03 from "./images/cherry_03.jpg";
import museum_cover from "./images/museum_cover.jpg";
import museum_01 from "./images/museum_01.jpg";
import museum_02 from "./images/museum_02.png";
import museum_03 from "./images/museum_03.jpg";
import data_cover from "./images/data_cover.jpg";
import data_01 from "./images/data_01.jpg";
import data_02 from "./images/data_02.jpg";
import data_03 from "./images/data_03.jpg";
import phonebooth_cover from "./images/phonebooth_cover.jpg";
import phonebooth_01 from "./images/phonebooth_01.jpg";
import phonebooth_02 from "./images/phonebooth_02.jpg";
import type_cover from "./images/type_cover.jpg";
import type_01 from "./images/type_01.jpg";
import type_02 from "./images/type_02.jpg";
import text_01 from "./images/text_01.jpg";
import text_02 from "./images/text_02.jpg";
import text_03 from "./images/text_03.jpg";
import genesis_cover from "./images/genesis_cover.jpg";
import genesis_01 from "./images/genesis_01.jpg";
import genesis_02 from "./images/genesis_02.jpg";
import genesis_03 from "./images/genesis_03.jpg";
import genesis_04 from "./images/genesis_04.jpg";
import animation_cover from "./images/animation_cover.jpg";
import animation_01 from "./images/animation_01.gif";
import animation_02 from "./images/animation_02.gif";
import animation_03 from "./images/animation_03.gif";
import animation_04 from "./images/animation_04.gif";

function artList() {
    return [
        {
            name: "Unravel",
            cover: (process_book_01),
            gfx: [process_book_01, process_book_02, process_book_03],
            bio: "Ut eu sodales orci. Ut ipsum ex, semper ut turpis a, semper euismod nulla. Vestibulum nunc magna, laoreet id quam at, sodales rutrum lectus. Quisque mattis nunc non odio tincidunt, sit amet commodo nisl dapibus. Donec dui mauris, imperdiet in sollicitudin nec, elementum et lectus. Ut eget dolor eget nisl hendrerit cursus. Vestibulum ut egestas mi, sit amet maximus tortor. Aliquam erat volutpat. Nullam scelerisque magna est, id laoreet libero ullamcorper at. Donec dolor tellus, imperdiet cursus dui ut, faucibus imperdiet magna. Donec vitae nunc auctor nisi malesuada vulputate. Quisque suscipit dapibus sapien, eu vehicula arcu commodo ac. Sed mauris arcu, sollicitudin ac nulla sed, sagittis malesuada libero. Nullam tincidunt dolor vitae arcu facilisis finibus. Quisque malesuada felis vel quam pellentesque rutrum. Curabitur a malesuada ante. Sed tincidunt eu lorem in dapibus.",
            id: uuidv4(),
            active: true,
        },
        {
            name: "Snowflake",
            cover: (snowflake_cover),
            gfx: [snowflake_01, snowflake_02, snowflake_03],
            bio: "This is 2 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Cherry",
            cover: (cherry_cover),
            gfx: [cherry_01, cherry_02, cherry_03],
            bio: "This is 3 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Museum Poster",
            cover: (museum_cover),
            gfx: [museum_01, museum_02, museum_03],
            bio: "This is 4 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Data Poster",
            cover: (data_cover),
            gfx: [data_01, data_02, data_03],
            bio: "This is 5 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Phonebooth Poster",
            cover: (phonebooth_cover),
            gfx: [phonebooth_01, phonebooth_02],
            bio: "This is 5 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Typography Poster",
            cover: (type_cover),
            gfx: [type_01, type_02],
            bio: "This is 5 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Typography",
            cover: (text_01),
            gfx: [text_01, text_02, text_03],
            bio: "This is 5 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Genesis",
            cover: (genesis_cover),
            gfx: [genesis_01, genesis_02, genesis_03, genesis_04],
            bio: "This is 5 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Animation",
            cover: (animation_cover),
            gfx: [animation_01, animation_02, animation_03, animation_04],
            bio: "This is 5 art piece that Ray made.",
            id: uuidv4(),
            active: false,
        },
    ];
};

export default artList;