<template>
  <Drawer :show="true">
    <template #drawer-content>
        <div class="drawer-menu">

            <div>
                <PlusIcon />
                <div>
                    Creeaza
                </div>
            </div>
            <div>
                <DeleteIcon />
                <div>
                    Sterge
                </div>
            </div>
            <div>
                <UnloadIcon />
                <div>
                    Descarca
                </div>
            </div>
            <div>
                <LoadIcon />
                <div>
                    Incarca
                </div>
            </div>
            <div>
                <AttentionIcon />
                <div>
                    Restabileste
                </div>
            </div>
            <div>
                <ExcelIcon />
                <div>
                    Importa Excel
                </div>
            </div>
            <div>
                <AsycIcon />
                <div>
                    Importa Asycuda
                </div>
            </div>
            <div>
                <ProductIcon />
                <div>
                    Nomencklatorul Marf.
                </div>
            </div>
            <div>
                <FileIcon />
                <div>
                    Evidenta Lucrului
                </div>
            </div>
            <div>
                <ClearXmlIcon />
                <div>
                    Curata XML
                </div>
            </div>
            <div>
                <ExchangeIcon />
                <div class="exchange-menu">
                    Importa Curs Valutar
                    <span class="updated-exchage-date">
                        Importat la data de 26.04.2025
                    </span>
                </div>
            </div>
            <div>
                <SettingsIcon />
                <div>
                    Setari
                </div>
            </div>
            <div>
                <LogoutIcon />
                <div>
                    De-logare
                </div>
            </div>
        </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import Drawer from "@/components/Drawer.vue";
import AsycIcon from "@/components/icons/AsycIcon.vue";
import AttentionIcon from "@/components/icons/AttentionIcon.vue";
import ClearXmlIcon from "@/components/icons/ClearXmlIcon.vue";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import ExcelIcon from "@/components/icons/ExcelIcon.vue";
import ExchangeIcon from "@/components/icons/ExchangeIcon.vue";
import FileIcon from "@/components/icons/FileIcon.vue";
import LoadIcon from "@/components/icons/LoadIcon.vue";
import LogoutIcon from "@/components/icons/LogoutIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import ProductIcon from "@/components/icons/ProductIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import UnloadIcon from "@/components/icons/UnloadIcon.vue";
</script>

<style scoped>
.drawer-menu div:hover {
   background-color: #05679c; 
   cursor: pointer;
}

.drawer-menu div:active {
   background-color: #086090; 
}

.exchange-menu {
    position: relative;
    display: flex;
}


.drawer-menu div {
    position: relative;
    display: flex;
    gap: 5px;
    align-items: center;
    min-height: 50px;
    padding-left: 20px;
    width: 240px;
}

.updated-exchage-date  {
    position: absolute;
    color: #0fb8be;
    font-size: 11px;
    width: max-content;
    bottom:-2px;
}

.drawer-menu div::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 6px;
  height: 100%;
  background-color: transparent;
}

.drawer-menu div:hover::before {
  
  background-color: rgba(153, 189, 239, 0.864);
}

.drawer-menu div div:hover::before {
  
  background-color: transparent;
}

.drawer-menu svg {
    color: #91a8bb; 
    stroke-width: 2;
    width: 30px;
    height: 30px;
}

</style>
