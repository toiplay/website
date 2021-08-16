# Meine API
Der Endpunkt der API ist: `https://api.krahforst.dev/`

## Grundlage
Die API ist mit [GoLang](https://golang.org/) gemacht und läuft parallel auf 3 Servern um die niedrigste Latenz und eine hohe Verfügbarkeit zu bieten.

## Autorisierung
Die Autorisierung erfolgt mit Hilfe des `Authorization`-Headers mit dem Token-Type `Bearer`. Ein Beispiel hierfür:
```
Authorization: Bearer TOKEN
```
Ein API-Token kann angefragt werden (Siehe die E-Mail Adresse im Impressum).
Grundsätzlich steht Jedem die API zu verfügung. Bei hohem Traffic oder Vergleichbarem kann sich dies jedoch ändern.

## Rate-Limit
Es gibt grundsätzlich von der API ausgehend kein Rate-Limit.
Das Einzige, was Probleme bereiten könnte, wäre Cloudflare.

## Dienste

| Name | Endpunkt | Beschreibung |
| ---- | -------- | ------------ |
| API | `/api` | Grundlegende Informationen der API wie z.B. die aktuelle Version |
| IP | `/ip` | Informationen über eine IP-Adresse wie z.B. den geographischen Standort |
| Status | `/status` | Den aktuellen Status meiner Dienste |
| Utils | `/utils` | Allumfassende Hilfsmittel wie z.B. den HLS-Feed eines Twitch-Streams |
| Wetter | `/weather` | Das aktuelle Wetter und die Wetter Vorhersage |