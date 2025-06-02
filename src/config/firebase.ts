import admin from 'firebase-admin';
import path from 'path';

// Si tienes un archivo JSON con las credenciales del servicio:
const serviceAccountPath = path.resolve(__dirname, '../../firebase-service-account.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
  });
}

export default admin;
