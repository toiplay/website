# Weather2

**Weather2 ist die zweite Version der Wetter-API und bietet die Möglichkeit über einen Endpunkt alle gewünschten Informationen abzufragen.**

> **Hinweis:** Die alte Wetter-API wird **nicht** durch diese ersetzt.

Die Base-URL lautet:
`https://api.krahforst.dev/weather2`

## Authentifizierung
Die Authentifizierung erfolgt mit einem Krahforst-API-Token der als Authorization-Header angegeben wird.
`Authorization: Bearer API_TOKEN`

## Standort
Der Standort wird vorerst in der Beta in Geographische Koordinaten, also Breite und Länge, angegeben.
`https://api.krahforst.dev/weather2?lat=52.520008&lng=13.404954`

## Sprache
Man kann die Sprache des Wettertextes ändern indem man ein ein `lang`-Queryparameter hinzufügt.
`https://api.krahforst.dev/weather2?lat=52.520008&lng=13.404954&lang=de`

## Einheiten
Die Einheiten wird ebenfalls über einen Queryparameter gesetzt. Dieser lautet `units`. Es gibt zwei Möglichkeiten für Diesen. Einmal das [metrisches Einheitensystem](https://de.wikipedia.org/wiki/Metrisches_Einheitensystem) `metric` und das [imperiales Einheitensystem oder auch das angloamerikanisches Maßsystem](https://de.wikipedia.org/wiki/Angloamerikanisches_Ma%C3%9Fsystem) `imperial`.

## Auswahlmöglichkeiten der Informationen

| Auswahl | Beschreibung | Beispiel (URL) |
| ------- | ------------ | -------------- |
| `current`          | Aktuelles Wetter | `https://api.krahforst.dev/weather2?lat=52.520008&lng=13.404954&select=current` |
| `hourly` | Wettervorhersage (Stündlich) | `https://api.krahforst.dev/weather2?lat=52.520008&lng=13.404954&select=hourly` |
| `daily` | Wettervorhersage (Täglich) | `https://api.krahforst.dev/weather2?lat=52.520008&lng=13.404954&select=daily` |
| `alerts` | Wetterwarnungen | `https://api.krahforst.dev/weather2?lat=52.520008&lng=13.404954&select=alerts` |

## Beispiel
Diese URL gibt das aktuelle Wetter und Wetterwarnung in Berlin (Mitte) zurück.

`https://api.krahforst.dev/weather2?lat=52.520008&lng=13.404954&select=current,alerts`

## TypeScript Beispiel
```typescript
const a: number = 12345;
```