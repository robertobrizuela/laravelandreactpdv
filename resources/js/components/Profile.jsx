import React, { useState } from 'react';

const Profile = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [username, setUsername] = useState('Usuario');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica para enviar los datos al servidor
        console.log('Datos a enviar:', { image, username, password, newPassword });
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <h1>Perfil de Usuario</h1>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* Columna de la foto de perfil */}
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img 
                                            className="profile-user-img img-fluid img-circle"
                                            src={preview || 'https://via.placeholder.com/150'}
                                            alt="Foto de perfil"
                                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <input
                                            type="file"
                                            className="form-control"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Columna de la información */}
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-blue-700">
                                    <h3 className="card-title text-white">Editar Información</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        {/* Nombre de usuario */}
                                        <div className="form-group">
                                            <label>Nombre de Usuario</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>

                                        {/* Contraseña actual */}
                                        <div className="form-group">
                                            <label>Contraseña Actual</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                        {/* Nueva contraseña */}
                                        <div className="form-group">
                                            <label>Nueva Contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                        </div>

                                        {/* Confirmar contraseña */}
                                        <div className="form-group">
                                            <label>Confirmar Nueva Contraseña</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>

                                        <button type="submit" className="btn bg-blue-700 text-white">
                                            Guardar Cambios
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile; 