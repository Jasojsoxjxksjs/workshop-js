
        const images = [
            'https://cdn.esawebb.org/archives/images/screen/weic2218a.jpg',
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg',
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80',
            'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
            'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
            'https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp'
        ];

        // الحصول على الحاوية التي سيتم إدراج الصور فيها
        const galleryContainer = document.getElementById('galleryContainer');

        // إنشاء العناصر باستخدام الحلقات
        for (let i = 0; i < images.length; i++) {
            const imgElement = document.createElement('img');
            imgElement.src = images[i];

            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.appendChild(imgElement);

            galleryContainer.appendChild(galleryItem);
        }

