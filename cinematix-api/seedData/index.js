import userModel from '../api/users/userModel';
import users from './users';
import genreModel from "../api/genres/genreModel";
import genres from './genres';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import dotenv from 'dotenv';

dotenv.config();

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
        await movieModel.deleteMany();
        await movieModel.collection.insertMany(movies);
        console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load movie Data: ${err}`);
    }
}

// deletes all user documents in collection and inserts test data
async function loadUsers() {
    console.log('load user Data');
    try {
        await userModel.deleteMany();
        await users.forEach(user => userModel.create(user));
        console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
    }
}

// deletes all genre documents in collection and inserts test data
async function loadGenres() {
    console.log('load genre Data');
    try {
        await genreModel.deleteMany();
        await genreModel.collection.insertMany(genres);
        console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load genre Data: ${err}`);
    }
}

if (process.env.SEED_DB) {
    loadUsers();
    loadGenres();
    loadMovies();
}