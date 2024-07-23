export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-4xl font-extrabold mb-6 text-center text-purple-700">À propos de moi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-lg text-gray-800 bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition duration-300">
                        <p className="mb-4">Je suis une <span className="text-purple-600 font-semibold">conceptrice développeuse d&apos;applications</span> passionnée par la création de solutions innovantes et performantes.</p>
                        <ul className="list-disc pl-6">
                            <li className="text-purple-600">Développement web frontend avec des technologies telles que React.js</li>
                            <li className="text-purple-600">Développement backend avec Node.js, MongoDB</li>
                            <li>Conception et intégration d&apos;API RESTful</li>
                            <li>Gestion de bases de données</li>
                            <li>Utilisation d&apos;outils de gestion de version comme Git et des méthodologies de développement agiles</li>
                        </ul>
                    </div>
                    <div className="text-lg text-gray-800 bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition duration-300">
                        <p className="mb-4">Je suis passionnée par l&apos;apprentissage continu et je suis constamment à la recherche de nouvelles technologies et de meilleures pratiques pour améliorer mes compétences et mon savoir-faire. Ma mission est de créer des applications qui non seulement répondent aux exigences fonctionnelles, mais qui offrent également une expérience utilisateur exceptionnelle et qui contribuent à résoudre les défis commerciaux de mes clients.</p>
                        <p>Si vous êtes à la recherche d&apos;une <span className="text-purple-600 font-semibold">conceptrice développeuse d&apos;applications</span> talentueuse et dévouée pour votre prochain projet, n&apos;hésitez pas à me contacter. Je serais ravie de discuter de vos idées et de collaborer pour les concrétiser en solutions innovantes et performantes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
