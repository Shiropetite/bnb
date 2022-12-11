<script lang="ts" setup>
import { usePopup } from "@/stores/popup";

const store = usePopup();
</script>

<template>
  <div>
    <div class="ma-12">
      <bnb-button
        class="gt-sm"
        icon="/icons/close.svg"
        @click="store.toggle()"
        round
      />
      <bnb-button
        class="lt-md"
        icon="/icons/arrow-left.svg"
        @click="store.toggle()"
        round
      />
    </div>
    <div class="popup-body">
      <div class="ma-24">
        <h2 class="mb-32">Ce que propose le logement</h2>
        <div class="mb-60">
          <h3 class="mb-40">Salle de bain</h3>
          <div class="mb-24 mt-24">Sèche-cheveux</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Eau chaude</div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Chambre et linge</h3>
          <div class="mb-24 mt-24">Lave-linge</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">
            <div>Équipements de base</div>
            <div class="mt-4 text-dark-grey">
              Serviettes, draps, savon et papier toilette
            </div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Cintres</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Draps</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">
            Oreillers et couvertures supplémentaires
          </div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Divertissement</h3>
          <div class="mb-24 mt-24">Télévision</div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Chauffage et climatisation</h3>
          <div class="mb-24 mt-24">Cheminée</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Chauffage</div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Sécurité à la maison</h3>
          <div class="mb-24 mt-24">Détecteur de fumée</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Détecteur de monoxyde de carbone</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Extincteur</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Kit de premiers secours</div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Internet et bureau</h3>
          <div class="mb-24 mt-24">Wifi</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Espace de travail dédié</div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Cuisine et salle à manger</h3>
          <div class="mb-24 mt-24">
            <div>Cuisine</div>
            <div class="mt-4 text-dark-grey">
              Espace où les voyageurs peuvent cuisiner
            </div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Réfrigérateur</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Four à micro-ondes</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">
            <div>Équipements de cuisine de base</div>
            <div class="mt-4 text-dark-grey">
              Casseroles et poêles, huile, sel et poivre
            </div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">
            <div>Vaisselle et couverts</div>
            <div class="mt-4 text-dark-grey">
              Bols, baguettes, assiettes, tasses, etc.
            </div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Lave-vaisselle</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Cuisinière</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Four</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Cafetière</div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Caractéristiques de l'emplacement</h3>
          <div class="mb-24 mt-24">
            <div>Front de mer</div>
            <div class="mt-4 text-dark-grey">Juste à côté d'un plan d'eau</div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">
            <div>Entrée privée</div>
            <div class="mt-4 text-dark-grey">
              Entrée par une rue différente ou un immeuble séparé
            </div>
          </div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Extérieur</h3>
          <div class="mb-24 mt-24">Patio ou balcon</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">
            <div>Arrière-cour</div>
            <div class="mt-4 text-dark-grey">
              Un espace ouvert du logement généralement recouvert d'herbe
            </div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Barbecue</div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Parking et installations</h3>
          <div class="mb-24 mt-24">Parking gratuit sur place</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Jacuzzi privé</div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Services</h3>
          <div class="mb-24 mt-24">
            <div>Animaux acceptés</div>
            <div class="mt-4 text-dark-grey">
              Les animaux d'assistance sont toujours autorisés
            </div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">
            <div>Dépôt de bagages autorisé</div>
            <div class="mt-4 text-dark-grey">
              Pour le confort des voyageurs en cas d'arrivée anticipée ou de
              départ tardif
            </div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">
            <div>Séjours longue durée autorisés</div>
            <div class="mt-4 text-dark-grey">
              Séjours de 28 jours ou plus autorisés
            </div>
          </div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Clés remises par l'hôte</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24">Ménage avant le départ</div>
          <div class="separator"></div>
        </div>
        <div class="mb-60">
          <h3 class="mb-40">Non inclus</h3>
          <div class="mb-24 mt-24 not-included">Climatisation</div>
          <div class="separator"></div>
          <div class="mb-24 mt-24 not-included">Shampooing</div>
          <div class="separator"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup-body {
  overflow-y: scroll;
  max-height: calc(100vh - 134px);
}

.not-included {
  text-decoration: line-through;
}
</style>
