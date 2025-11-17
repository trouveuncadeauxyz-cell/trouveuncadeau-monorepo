export default function HomePage() {
  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Bienvenue sur TrouveUnCadeau.xyz
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Découvrez des cadeaux uniques et soutenez le commerce local québécois
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Explorer les cadeaux
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            En savoir plus <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              Commerce Local
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                Soutenez les artisans et commerçants québécois en découvrant leurs produits uniques.
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              Cadeaux Uniques
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                Trouvez des idées de cadeaux originales pour toutes les occasions.
              </p>
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              Livraison Rapide
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                Recevez vos cadeaux rapidement partout au Québec.
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
