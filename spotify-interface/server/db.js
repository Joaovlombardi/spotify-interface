import mongoose from 'mongoose';

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://administrador:administrador@cluster0.8xzac.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}
