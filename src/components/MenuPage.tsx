import { useState } from 'react';
import { Navbar } from './Navbar';
import { MenuHero } from './MenuHero';
import { CategoryFilter } from './CategoryFilter';
import { DishCard } from './DishCard';
import { ChefSpecial } from './ChefSpecial';
import { Footer } from './Footer';

interface Dish {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const menuData: Dish[] = [
    // Starters
    {
        id: 1,
        name: 'Vegetable Samosa',
        description: 'Crispy pastries filled with spiced potatoes and peas',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1627670381055-487000952cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBmcmllZCUyMHNuYWNrfGVufDF8fHx8MTc3MDgzMzEzMHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Starters'
    },
    {
        id: 2,
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese cubes grilled to perfection',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1657056852174-4d0e8a3f61ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBtYXNhbGElMjBjdWJlc3xlbnwxfHx8fDE3NzA4MzMxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Starters'
    },
    {
        id: 3,
        name: 'Chicken Tikka',
        description: 'Tender chicken pieces marinated in yogurt and spices',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1728542575492-47e02eb3305c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGNoaWNrZW4lMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzcwODMzMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Starters'
    },

    // Main Course
    {
        id: 4,
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwY3Vycnl8ZW58MXx8fHwxNzcwNzkyNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Main Course'
    },
    {
        id: 5,
        name: 'Lamb Rogan Josh',
        description: 'Aromatic lamb curry with a blend of Kashmiri spices',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1586981115871-f10a7ea4c8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1iJTIwY3VycnklMjBzcGljeXxlbnwxfHx8fDE3NzA4MzMxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Main Course'
    },
    {
        id: 6,
        name: 'Dal Makhani',
        description: 'Black lentils simmered in cream and butter',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1659716306756-13cae19333b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjBjdXJyeSUyMGxlbnRpbHN8ZW58MXx8fHwxNzcwODMzMTM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Main Course'
    },

    // Grills
    {
        id: 7,
        name: 'Tandoori Kebab',
        description: 'Succulent skewered meat grilled in tandoor',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1640425441723-762b6fe95fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGtlYmFiJTIwZ3JpbGxlZHxlbnwxfHx8fDE3NzA3MDgzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Grills'
    },
    {
        id: 8,
        name: 'Mixed Grill Platter',
        description: 'Assorted grilled meats with mint chutney',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1728542575492-47e02eb3305c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGNoaWNrZW4lMjB0aWtrYSUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzcwODMzMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Grills'
    },
    {
        id: 9,
        name: 'Tandoori Naan',
        description: 'Freshly baked bread from the tandoor',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzcwNzkzODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Grills'
    },

    // Biryani
    {
        id: 10,
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice layered with spiced chicken',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NzA4MzMxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Biryani'
    },
    {
        id: 11,
        name: 'Lamb Biryani',
        description: 'Premium lamb slow-cooked with aromatic rice',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NzA4MzMxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Biryani'
    },
    {
        id: 12,
        name: 'Vegetable Biryani',
        description: 'Mixed vegetables and rice infused with saffron',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NzA4MzMxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Biryani'
    },

    // Beverages
    {
        id: 13,
        name: 'Mango Lassi',
        description: 'Refreshing yogurt drink blended with mango',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1655074084308-901ea6b88fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpJTIwZHJpbmt8ZW58MXx8fHwxNzcwNzkyNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Beverages'
    },
    {
        id: 14,
        name: 'Masala Chai',
        description: 'Traditional spiced tea brewed to perfection',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1655074084308-901ea6b88fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpJTIwZHJpbmt8ZW58MXx8fHwxNzcwNzkyNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Beverages'
    },
    {
        id: 15,
        name: 'Fresh Lime Soda',
        description: 'Tangy lime with soda and a hint of salt',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1655074084308-901ea6b88fd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGxhc3NpJTIwZHJpbmt8ZW58MXx8fHwxNzcwNzkyNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Beverages'
    },

    // Desserts
    {
        id: 16,
        name: 'Gulab Jamun',
        description: 'Sweet dumplings soaked in rose-flavored syrup',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzA3OTM4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Desserts'
    },
    {
        id: 17,
        name: 'Kulfi',
        description: 'Traditional Indian ice cream with pistachios',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzA3OTM4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Desserts'
    },
    {
        id: 18,
        name: 'Rasmalai',
        description: 'Soft cheese patties in sweet saffron milk',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NzA3OTM4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Desserts'
    }
];

const chefSpecialDish = {
    name: 'Royal Lamb Shank',
    description: 'Slow-braised lamb shank in a rich aromatic gravy, served with fragrant saffron rice. A masterpiece of traditional spices and modern culinary techniques, garnished with edible gold leaf.',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1769681375998-1b231dcbe363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwc3BlY2lhbCUyMGdvdXJtZXQlMjBpbmRpYW58ZW58MXx8fHwxNzcwODMzMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080'
};

interface MenuPageProps {
    onNavigate: (page: 'home' | 'menu' | 'delivery' | 'book' | 'about') => void;
}

export function MenuPage({ onNavigate }: MenuPageProps) {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredMenu = activeCategory === 'All'
        ? menuData
        : menuData.filter(dish => dish.category === activeCategory);

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden pt-28">
            <Navbar activePage="menu" onNavigate={onNavigate} />

            <MenuHero />

            <CategoryFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            {/* Menu Grid */}
            <section className="py-12 pb-20 bg-gray-50">
                <div className="w-full mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredMenu.map((dish, index) => (
                            <DishCard
                                key={dish.id}
                                name={dish.name}
                                description={dish.description}
                                price={dish.price}
                                image={dish.image}
                                index={index}
                            />
                        ))}
                    </div>

                    {filteredMenu.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-400">No dishes found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <ChefSpecial dish={chefSpecialDish} />

            <Footer />
        </div>
    );
}
