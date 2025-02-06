import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function ProductosScreen() {
  const [productos, setProductos] = useState([
    { id: '1', nombre: 'Producto A', cantidad: 0 },
    { id: '2', nombre: 'Producto B', cantidad: 0 },
    { id: '3', nombre: 'Producto C', cantidad: 0 },
  ]);

  const modificarCantidad = (id, delta) => {
    setProductos(productos.map(producto => 
      producto.id === id ? { ...producto, cantidad: Math.max(0, producto.cantidad + delta) } : producto
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Almacén Dev - Productos</Text>
      </View>
      <FlatList
        data={productos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.producto}>
            <Text style={styles.productoTexto}>{item.nombre}</Text>
            <View style={styles.controles}>
              <TouchableOpacity onPress={() => modificarCantidad(item.id, -1)} style={styles.boton}>
                <Text style={styles.botonTexto}>-</Text>
              </TouchableOpacity>
              <Text style={styles.cantidad}>{item.cantidad}</Text>
              <TouchableOpacity onPress={() => modificarCantidad(item.id, 1)} style={styles.boton}>
                <Text style={styles.botonTexto}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 150, 
  },
  
  header: {
    width: '100%',
    padding: 45,
    backgroundColor: '#6200ea',
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'absolute', 
    top: 0,
    left: 0, 
    right: 0,
    zIndex: 1000,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  producto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    elevation: 3,
  },
  productoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  controles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  botonTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cantidad: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
