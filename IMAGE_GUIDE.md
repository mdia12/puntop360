# Guide pour Modifier les Images - Punto360

## 📍 Emplacements des Images dans le Projet

### 1. **Section Hero (Page d'accueil)**
**Fichier :** `src/components/Hero.tsx`
**Ligne :** ~15
```jsx
<img 
  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
  alt="Restaurante elegante"
  className="w-full h-full object-cover opacity-40"
/>
```

### 2. **Section Photography**
**Fichier :** `src/components/Photography.tsx`
**Ligne :** ~45
```jsx
<img 
  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" 
  alt="Fotografía gastronómica profesional"
  className="w-full h-full object-cover"
/>
```

### 3. **Galerie d'Exemples (4 images)**
**Fichier :** `src/components/Gallery.tsx`
**Lignes :** ~6-25
```jsx
const examples = [
  {
    src: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    alt: "Latte art profesional"
  },
  {
    src: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg",
    alt: "Croissant recién horneado"
  },
  {
    src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    alt: "Plato signature del chef"
  },
  {
    src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    alt: "Terraza al atardecer"
  }
];
```

### 4. **Page Galerie Complète (12 images)**
**Fichier :** `src/components/GalleryPage.tsx`
**Lignes :** ~12-80
```jsx
const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    alt: "Latte art profesional",
    category: "Bebidas"
  },
  // ... 11 autres images
];
```

## 🔧 Comment Modifier les Images

### Option 1: Remplacer par des URLs Pexels
1. Allez sur [Pexels.com](https://pexels.com)
2. Cherchez une image de restaurant/nourriture
3. Copiez l'URL de l'image
4. Remplacez l'URL dans le code

### Option 2: Utiliser des Images Locales
1. Placez vos images dans le dossier `public/`
2. Remplacez l'URL par `/nom-de-votre-image.jpg`

**Exemple :**
```jsx
// Au lieu de :
src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"

// Utilisez :
src="/ma-photo-restaurant.jpg"
```

### Option 3: Utiliser l'Image que Vous Avez Envoyée
L'image que vous avez envoyée est déjà dans `public/251001_179-17 copy.jpg`

Pour l'utiliser :
```jsx
src="/251001_179-17 copy.jpg"
```

## 📝 Conseils pour les Images

### Formats Recommandés
- **Hero :** 1920x1080px (paysage)
- **Galerie :** 800x800px (carré)
- **Photography section :** 1200x600px (paysage)

### Optimisation
- Taille max : 500KB par image
- Formats : JPG, PNG, WebP
- Compression recommandée

## 🎯 Images Prioritaires à Changer

1. **Hero Background** - Image principale de la page d'accueil
2. **Photography Hero** - Image de la section photographie
3. **Galerie 4 exemples** - Les 4 images de la galerie d'accueil
4. **Page galerie complète** - Les 12 images de la galerie

Voulez-vous que je modifie une section spécifique avec vos propres images ?