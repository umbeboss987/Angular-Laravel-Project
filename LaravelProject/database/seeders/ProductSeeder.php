<?php

namespace Database\Seeders;

use Illuminate\support\Facades\DB;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product')->insert([

            'name' => 'Apple Iphone 13 Pro Max', 
            'description' => 'Un nuovo, sorprendente salto di qualità per le fotocamere. Un display così reattivo che anche i gesti di sempre ti stupiranno. Il chip per smartphone più veloce al mondo. Robustezza eccezionale. E autonomia senza precedenti. Entra nel mondo Pro.
            ', 
            'price' => 130.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/handys/apple-iphone-13-pro-max.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIxNzk0.format-hardware-configurator-xxl.png',
            'type'  => 'phone',
            ]
        );


        DB::table('product')->insert([
            
            'name' => 'Huawei P30', 
            'description' => 'Huawei P30 Pro è uno smartphone Android avanzato e completo sotto tutti i punti di vista con alcune eccellenze. 
                            Dispone di un grande display da 6.47 pollici con una risoluzione di 2340x1080 pixel. Le funzionalità offerte da questo Huawei P30 Pro sono veramente tante e all avanguardia.
                             A cominciare dal modulo LTE 4G che permette un trasferimento dati e una navigazione in internet eccellente.', 
            'price' => 230.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/handys/huawei-p30-pro.primaryproductimage.code-MDAwMDAwMDAwMDAwMDE5NzU3.format-hardware-configurator-l.png',
            'type'  => 'phone',

            ]
        );

        DB::table('product')->insert([
            
            'name' => 'Samsung Galaxy S20 FE 5G', 
            'description' => 'Il Galaxy S20 FE è disponibile in sei nuovi colori iconici. Le eleganti tonalità opache e il design caratteristico della linea S20 rendono questo smartphone imprescindibile per tutti i fan dei modelli Galaxy. Il display piatto sAMOLED da 120 Hz e 6.5" si integra alla perfezione negli angoli in alluminio e nella cover posteriore ergonomica disponibile in una varietà di colori opachi. Tenere il Galaxy S20 FE nel palmo della mano è una sensazione di gioia allo stato puro.', 
            'price' => 330.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/handys/samsung-galaxy-s20-fe.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIwNzUy.format-hardware-configurator-xxl.png',
            'type'  => 'phone',
            ]
        );

        DB::table('product')->insert([
            
            'name' => 'Samsung Galaxy A32 5G', 
            'description' => 'La strepitosa qualità delle immagini del Galaxy A32 5G ti fornisce il supporto ideale per la creazione dei tuoi contenuti. Il fantastico display sarà il tuo fedele compagno in qualsiasi occasione di intrattenimento, dando vita ai tuoi giochi preferiti alla massima risoluzione.', 
            'price' => 530.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/handys/samsung-galaxy-a32-5g.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIxMjg5.format-hardware-configurator-xxl.png',
            'type'  => 'phone',
            ]
        );

        DB::table('product')->insert([
            
            'name' => 'Oppo Reno6 5G', 
            'description' => 'L’OPPO Reno6 convince con uno schermo AMOLED da 6,4 pollici e una frequenza di aggiornamento delle immagini di 90 Hz. Con la tripla fotocamera AI da 64 MP e la nuova funzione Bokeh Flare Portrait, video e fotoritratti diventano opere d’arte uniche. L’OPPO Reno6 si ricarica completamente in soli 28 minuti grazie alla tecnologia SuperVOOC 2.0 da 65 W. Dispone di 8 GB di RAM, 128 GB di ROM e chip MTK Dimensity 900 5G.', 
            'price' => 420.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/handys/oppo-reno6-5g.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIxNzQx.format-hardware-configurator-xxl.png',
            'type'  => 'phone',
            ]
        );

        DB::table('product')->insert([
            
            'name' => 'Apple iPhone SE', 
            'description' => 'Immagina il chip Apple più potente, racchiuso in un design amatissimo, a un prezzo eccezionale. È il nuovo iPhone SE. Con un design in resistente alluminio e vetro e un brillante display Retina HD da 4,7".
            La fotocamera evoluta, insieme al potente chip A13 Bionic, rende possibile la modalità Ritratto: il soggetto che inquadri si staglia nettamente su uno sfondo sfocato. E puoi creare lo stesso effetto anche nei selfie.            
            ', 
            'price' => 420.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/handys/apple-iphone-se01.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIxMDk2.format-hardware-configurator-xxl.png',
            'type'  => 'phone',
            ]
        );

        DB::table('product')->insert([
            
            'name' => 'Apple iPad Air 10.9', 
            'description' => 'Con il chip A14 Bionic hai tutta la potenza che serve per dare vita a ogni tua idea. Gira e monta un video 4K direttamente su iPad Air. Usa la Apple Pencil di seconda generazione per dipingere e disegnare con pennelli dinamici, ombreggiature e sfumature. E scopri nuove esaltanti possibilità creative per il fotoritocco, la musica e tanto altro, grazie alla potenza grafica e al machine learning evoluto del nuovo chip.            
            ', 
            'price' => 420.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/tablets/apple-ipad-air-10-9--cellular.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIxMDM2.format-hardware-configurator-xxl.png',
            'type'  => 'tablet',
            ]
        );


        DB::table('product')->insert([
            
            'name' => 'Galaxy Tab S7FE', 
            'description' => 'Il display immersivo e i bordi sottili del Galaxy Tab S7 FE 5G portano l’esperienza multimediale a un livello superiore. Il tablet è ultrasottile e la scocca in metallo, leggera e disponibile in quattro colori alla moda, torna utile quando si lavora in mobilità per periodi prolungati o nelle attività scolastiche. L’S Pen, sviluppata per garantire alta produttività e promuovere creatività, è inclusa nel pacchetto. Grazie alla Book Cover Keyboard opzionale il Galaxy Tab S7 FE 5G diventa il compagno ideale a scuola e in mobilità.            
            ', 
            'price' => 420.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/tablets/galaxy-tab7fe---bookcover.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIxNjQx.format-hardware-configurator-xxl.png',
            'type'  => 'tablet',
            ]
        );

        DB::table('product')->insert([
            
            'name' => 'Apple iPad 10.2', 
            'description' => 'Fare un milione di cose con zero fatica: questo è lo stile di iPad. Stai videochiamando con FaceTime? Intanto puoi lavorare a un documento e fare una ricerca sul web. Vuoi scrivere pagine e pagine di testo? Puoi agganciare la Smart Keyboard e digitare su una tastiera in piena regola. Ti serve grande precisione? Ora puoi abbinare un trackpad o un mouse, e usarli in perfetta sintonia con l’esperienza Multi‑Touch che già conosci.         
            ', 
            'price' => 420.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/tablets/apple-ipad-10-2---2020-.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIxMDE2.format-hardware-configurator-xxl.png',
            'type'  => 'tablet',
            ]
        );

        DB::table('product')->insert([
            
            'name' => 'Samsung Galaxy Tab A7', 
            'description' => 'Goditi la visione dei contenuti con superba nitidezza e una luminosità ottimale sul display di livello superiore del Galaxy Tab A7. Guardare le immagini, estremamente nitide e più vivide grazie all’alta risoluzione e alla luminosità di 400 nit, è un vero piacere. Grazie alla fotocamera frontale in direzione orizzontale puoi comodamente effettuare videochiamate in posizione ottimale. Gli altoparlanti stereo Quad e il suono surround 3D Dolby Atmos si combinano per offrire una vera esperienza cinematografica.       
            ', 
            'price' => 420.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/tablets/samsung-galaxy-tab-a7.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIwOTA5.format-hardware-configurator-xxl.png',
            'type'  => 'tablet',
            ]
        );
    }
}
