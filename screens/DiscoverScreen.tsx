import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, PanResponder } from 'react-native';

import AnimatedProfileCard from '../components/Profiles/AnimatedProfileCard';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants/DIMENSIONS';


export default function DiscoverScreen() {


    const DATA = [
        { id: 1, text: 'Card #1', uri: 'data:image/jpeg;base64,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' },
        { id: 2, text: 'Card #2', uri: 'data:image/jpeg;base64,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' },
        { id: 3, text: 'Card #3', uri: 'data:image/jpeg;base64,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' },
        { id: 4, text: 'Card #4', uri: 'https://c.ndtvimg.com/2022-06/f6a04be_queen-elizabeth-reuters-1200_625x300_12_June_22.jpg' },
        { id: 5, text: 'Card #5', uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGRgaHCQcGhgaGhocGhoaGhwaHBoeGhgeIS4lHB4rIRocJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ1NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NP/AABEIALUBFwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA/EAABAwIDBgMFBgUDBAMAAAABAAIRAyEEEjEFIkFRYXEGMoGRobHB8BNCUnLR4QcUI2KSM8LxJEOCohVTc//EABoBAAIDAQEAAAAAAAAAAAAAAAIEAQMFAAb/xAAtEQACAgEDAwMEAQQDAAAAAAAAAQIRAwQhMRJBUSIycQUTM2GBFCNC8JGxwf/aAAwDAQACEQMRAD8A8sqVVwL3UTblSgImcjYtom2ztrvYd7eb7/3ShdBVzxxmqaDjJxdovNDFseA5pTak8QvPNm4zI8X3TqPmrbRxBWNqdM8ctuBvHk6kMGPupnlDUTdTuKRa3GI8C2qd8Jdt07w7phVG+Er2+7eancHKKZ9x94feGtfPL5LezfvHql+AxUNd2+SN2O+Wk9VZPhgLkZVDZVvagAY49VY6uirG1hLSDzVePeQT4FTbgK8eDI/lq3Y/NUeiLK5eD3f9NWHQ/NMZfaAhPiscGvwmZoIa6/UWBVi2DUY/F1XUxDSG26xBSDarKZo4aoDvh2VzYk3FpI0mCb6pn4XBZUqPIcwZQ5pIixFnCYlvuTGKPpTKZPcu4W1BhsQ1wAL25phw/A4OILXDgREqXGlrHFrnCNC4QRcSImxJMD1VoBJUZEdRPxHyXAUbKggBzt++ZpjdIMRcz1uiH0S12U6yBYg3MRf1R14IOAh8b5VLSq5gCBAix59Zi/7KHGndUvgFciQlBbV8hRhQe1PIVXHlBy4KRixcoAo7F6lBwtKC2EJvcnpBdvbdcUiu6hhMLgofJhYu6YuuBdTMajSAbJaWqu/g6sGv11CpLG3Vp8PUnl7co6ngI7o0ri0LTlUk15GPjKo0vbBJdF45cPn7SsQviN7TUta1xyKxU/0mOe7sbx/V9RiThDhM8qYV2brHjePdYFnGodgLRKyVySpOMKtGxcTnp31FlV3FNvDtTfLPxBK6uHVjb8bluGVS+S04WpJR70DhqRDkY4rAnXVsaMeAN9PeSjxCN4Kw5VXfEnmCv08rmkV5FSBaFSx7J/4cMsVZomzlZvDHkTWZellUeRzVFlWNtNhpKtFU2Vb2+JaYS+L3IOS2E9AyrX4VxTfsHsMCzgXc5dYu7THqFV8BTlpViwz2vY14Aa8kuIhpbLM4046RHUck8oqTaKW6RN/JhjXCGvZOR7ujXWewE8CDBE6u5FPaLyCcrswawNBLSYa1xYM3ATIt0S3DS0Gm1oyvaBcOMiJiJDvOwz/+hI5pm/ZzyGkMLSBciTYt8oJgtEwdDfkmFF1SKrVhFOkGOexo3XOLpluX8RLSYymDlgco4oh1Rjmj/wCt7pkm4abDO5pBbrbQcZUTWZQWhrrhstDrWaAbZW+UAd7ohlMky45pfnzacznygwXSfLEX9FPSuSLIHMYwOY12ZtnF9g3M2A943o1kQJAggZcsLWJaXMLGOe4v8j7tLmhpjI2JFxxMDjop3UjvQXAufmuWlhgg5nMyQJIghpFhEwuatGMsWiSIGR03jeBcBBItYQI4ldW9kN7G6FZjG8TDgywAkOcQ3K0NECTxEDMNFDtLFNsGkOMtOXXMJIkATIzNAPC8Sg6jjmEjLwIOrs7XZsjnHKRDTxDt4CeJHDw532jw0vdDBeQG5mMEQYBJLXCbHLMkBGraBpWbqPJJJuSf2CD2qNwoh2LkgBoDmhoLmGwcHPac17OJaCL+W90LtI7hQJVIl8FJxupQYKLx7boRq0sfAjPklplTlkqGk26Ky2TMULydM01t1JTZdcgKZgViRVJkjGq2eHCCMpdB4RY+1Vim1Fv2g2iMxO9Fmg3J+QUulFtsXfVKSUVbGXiKq2mSSbCB6krFRdqbTfWdLj6DQLErLVNP0oeh9NTVye4DV8xWpXeI1UUpI0joFY5YFhK4kwInZ1XJUY7rHtshpXVHzN/MPiEGRXFphRdM9IBmD0WOKjpndb2XTl5hrc1QljbKteI27wVlpaKt+IzDgrdL+QDL7RYywPZWbw1akVWmGQeyf+H3xSKeybxFyfG42DCUbQrZmFRbTry8hDuMscr1gjGCkJR1UnPpJME+xjkrDsnYz30mF8tGYuAOpEgi3C4WvBWwxV33yGTYaZo1vrHb2q8uwQbZohvADgEcIPkYlLsA7IwDGXiSIMm8wIHopWYzM/zEmd6ZiOMfopnS0yENRw8uc7gSr+EBGPUxicQw3DZ+v2UrKrY8q1h6IA0U5pDgh6i37RAys2bt4/OVutVvMQOa7/l0NjGODY1RKSBlj8EOKoh7HQRJBAPCSLSOPYyOirhqhr8riTOh/uAytOXR8BjgW6eWwNjZqVdgFgYHPUu4lKcfss1iHQWlpN7iZ07mfcSDIUt+CmhTQqySARAv90g5t4QQDlABEAHUOXO0DuFH0tiuYHHMLmQ2IAuTAOsXPFLdpAhpB1Qf5Evgp+NFyhAIRmLZLihsq0sa2EMj9RNQuiHKKhTWsTjGMsDmPIfqmepRVsW6XKVRVhDQuzVYwS5wB5an2JNUxr3aHKOn6qIsPJUy1KXtRdHSN+518B2K2sSYYMo5/e/ZLXvJuSSeZuuG8ZXQbNglpTlJ22NwxwgqSO6TJPZaRVJkCFiGiwGxegKHaUXiRulBwhfJyO8y3MrkBdFcSclE4Bs1GfmCGCN2Q2azO/y/dBldQb/QUFckX0DTssesebrT9F5lmqFUdFXPEIuFYaZsq74i1Cs035AMvtFWH49k82M6KBSPDXzfXBNtmuig5PzV7ftCzdITYqpLypqBGh0kT2m6WPq7xRmCfmtbUa6RIlaM0lCjLxxbyJnrdIta9uSzWtAEWA7J254cAear2FpBzQGuNrJlhnFoIJ4+9dAbkarVBoeCiw79VvGvAA5mfX6sg8NiosBKryPsMYY7WOaD0S16U08bBhzSO2iLbiWmPrgVUmy9qwvOoaz5sh34tjRc/qoP5xpEtBI5wutndKOmN3oRwfMCP3SpleXAppQeAJKvxu0K5o0zeMEiAqn4ooAMa8akwe0WlWw1Jtzt7VVvE9YCmGcSb+k/XojaKCh1BvJZWxoBIAk+5McXMOjXKVWhY9Ff1yiqRQsUZO2E1MS52pgcgowsPNaahbb3ZcoqKpEoReEf906j3hCNWza41UpEWMS1R5ADMLrDVczZ9q6e1TRJHC2tgLFJwK8TI5hA50wSx7N4jqq2ciRjlslctsFkriTJTTw82a47H4hKinHhhv8AUJ5D6+Co1DrG/gPGvUi5PN129tlFxRTxZedbqjURunoq/wCIRcKwU9FXfELrhW6b8gGX2i3DN1TXZ9L/AKd6VYd1yrFsRzf5ZwKfk63+BZ7qijVaZko3ANgGeKkx4GYwuaTt0wnpSuAnGPTOi2bB22Q3I/hbPPDhPLunpx5ItafiqBsx3mniE68O4hzmEE+UkCeU215KuE62Yw4rksjcTmfc8IRWHY8ElgkyNdADx+v3S7EeZjgIBie8AqxYB1hGvxUSe4zGPpFLcTjDUcHNbkElriGyRwtM90ywEueQ9oBgG3WZ+CYubPD66IXBsGdx5WUuSfYmKpAT3uzuAYw71ibwBAuOfHVBtxWLNRzMjPsxMENsRNvvTMdNU7pUt91uKJDOkHnNlykq4IcbfIrayNbEWKjdjOA53g6InaDoFkrrMAbMQSRHoLn2ro8kZIqrGrMWct47/JVrxBVlobqdSpMTiy0COP1ZLa8uBJuSrHLehNx2sq+1a+RpPOyQl86p1tuqyzfM5pkjh2J+SSucSrmVrZEjDZY1aZqu2tRJHM7aF0QumtWEIwTWGfld0OvQ8CmDhKWozDVJ3Trw6rkESQsUpasU0CL3hC12b09Pr4IzLzQmNtCrkSiDMugogV2CoCNPKtHhWhulx4n4WVWKvGyKWSmwdElrZVjryX4I3K/AfVqBtyoqm02xCjxzS4WSR+BdM3WZjxRauTHJSa4Lbhqoc2yQbfuQmuzmkNuku33XCjBGsuxGR3EDw3FT4GsQxwBQlJ2vZT7KZmkJ9opIquGJuoWWBVrxGCAZPRVN2rldFtxYvNJSRNg3QXdkw2HiMlN545ifeUswd57IrZX+m/ufiVVPZP8AgtRa8Hi89NjoOs9LC494Vk2e+/oqFs3bAY1lDKId94GCCJJng4XPLQK87PuARyRvdIvxSvYb4quQ3KyMxGp4dUuwFVzHOaWEDWRLvUnmuMVj2MnOculzpA/coel4hw5JGe/bRGlYfS3whm173PzNbliIJJnqMvL64I9lVrhOh4jkUjO3qEkZwD1tqp8NiQ90tMgi5GnS/Fc1RHS+5zjzqEBiqkNHIBGY43S/HiGcvr390K2RVll2ElSqXOkpN4k2i9gaxtg5pJdx1iByTNrrqDbeEY+kS+xYCWuGo6dQVMH6lZRJbFKBlYAuzHDRaATiKmdMCmDVw0KV1oViQDZsrhdarTlxBgCySDINwtwshccH0n5hPu5HksQNOpkJPA6j5ramziWqIKDx7bA9UZUu4qDFs3D0v70DJiLAtly0FtAGFbPo53sbzPwuvRKeDIAHRU/wnQz129B8for0nJ0WJ9TzNTUV2Q7pY+lsUHCldtwfZNRTC7DByWU87GukXfy0Aqpbdbcd1e8QyGlUTbvmHdOaKTlKyrNshbSFyjtgESUJhxc9lNsyRmK1RcsmPxP9OOnyVNzSSmGO2gYiEqY/WU3jwycNlyKzmuvcOwDbu7LrZlSGvHU/FQYPFta7ezQbEgTA5xxTqrsgNpudQdmLt4F0EOGsNiInrPzC+bG8dKaq+H2GINSVx3oSuYC+iJ1Og14L0jw/iSAA60Wv8Ul2LiKb6YdTbkytDHsGucDeLjq6evAcLoujiMjwTcWBF+PXTh7wplBp0+UHB0r8lgxYD3EESIiD7fmgHbIYRumJ5ySBpAIIt7VulioefwmCPYmjHsPAKVaGIzceBZS2KwEHNIGjQIHaSSmVE5SQLCBH17FI97AJQDKkknhwXNtnSk5cnGOxOVw4k/RQePrhzLexc4lwe8CRunhd4JFobqWwTJ5SjGYXdDjcH5qGqQu0pSZVWvUG2qn9B/oP/YK9YLZzXPY0sY9pNw5oJ0NwdVHtrwMyo17WPLC4bjTdocLi+sSBOtp6QWODdMpyPpdM8bhdtCfbW8KYnDNzPZLAJL6ZzNEzro4aakAXCTBiaRSYGrmr5R3UrRZR4gbqs7AEjdFxxW2u3Z6LVMXlSziRaKx5U76EMzTe3a9lINkELFuFi4mydtKBLlBWu13UH4I19PM6+i4cBMdFEkRGRXV0wLnT0su2BUlpafBtnOd2HuP6q9Uq4K888MsdmcQd0RI6q34WosD6hDqytmjp36UPmCVIGIfDVLIoFY0k0xpCva2KDAZKpW1nh5EXunviyrAVEdiXB0iYW3oMPp6kKZ5b0MqI1TXZtR9FjHvY37J7i3NlBeI4g8te8FLMMZBK9a2XsJlTBNo1BIdTaCeRhpkTcGZK1MEITk45Ft3Fcs3BJrkpXiDY7HszU4zi4DfvjkYtPEFUv7PiVd9hsNKrUwtQy6mdwniz/ghwHU8kq8UbN+zq5wNypJ7P+97Zn1Kd+l5Ps6h6PK77xflFepip41mj/JXGtVp8K4mZovP9zPi5vz/yVaLIKLpGpTyVWtcIMteWnISJsHaGYPvW3rtFDPp5Y3z2/T7CmDK8c01x3+B1jAMLimVBanUOWoOAPE/7v8uae4rCEkkAaOAmmXySA5oBGpgO7AHoga2GGLZDfvCWk8HagHsRB9VrYmP3TSqNIrUhlEvLSA2d4DQuDQW6jgZvbzOmvLjqXvhs13ryaOWovbh7oYYOwANxpMETyI76+qLw+AcJIe+J0lcNgTaLNdJJnKXQyLXIvN+qsLAMojTX2onHcuhK0VygxwfD3Od0J09Ecxky46BEYmgHOBAuDqosS8MbESBrYw48ROlpFuo6oaDk+lAX2TgRAfBc6xc1shgzFocBmBDng21A6XeMpmL+1KcDh25g2ZjL93WxfmDpgXMdeQsn9I8EUo2U4r3ZPsijvyBoPebfCU7cAfr3ILA5WMvMv3tOHD66rv8A+RZlm8G/lJCshGkL5IynK4p0dvoAi/6qvbR8H4R4d/Ra0uuXUwGOBmZ3ePcHqnTdrUzYZo/KYm0j3jpdaftFgvld6AfqpoFYp+GeO+I/CdbDOaR/VpvJDXNaZB4Nc28GONwYOirWMY5oc1wIc2zmkQQQbgg6L6KpPa46Ed/2VK/iVsMVKBqMDGvpkvcbDO2IIJ5iAb8jzRJsB3F0zyJlSWtHtRcJaxt+KMZUUqRLQQQtCbCTA4cF0HLqEdlbRwQsXULSk4IY9ws4eoWEgXXb67W8yeSDe0uI5uKiTBihTiGw8xpMjsVjEZtWjke2Pw/AlCNVL5L0WDwu/fc3mP1VmwfmVR8Nviu3qP3VtxwyOlqx9bH+7XlD2B+n4LBRgDVStqhJcDVc4XTJo6rFnCnTHIysrviLeeB1STbNFrQ0NCd7YZvjuk22j5VraZ7RQrk5YZ4Y2d9q+XA5GEF5Eejb8z7gV67sqqS6D89OBn61VE/h/gg5j3cXugdWsA92Z/uXoeFYZA0AAsO0G62cMajfkzs0rlXgpn8R9nOpvp41guwhr44gmB6Xy/8AmENtXCtxOH3LlzQ+mf7gJHaQY9SvQdq4JtWk9jxLXNLSOhEWPBeY7BLqFapg6jvIS6mT95pv8CHR+bkh10ZPHHUY/fid/KD00km8cuJf9ibwbRp1MWxlVgdmByNc3M0vF4cz70DMYNrcbBXjaFBtZtWm9rmy0hpJY9jmhubNbyEXuIu0GBFqN4qwrqVYVWSA8hzS2xbUFzEaEne7k8lbjserUw/2WILnPLSSWgtFNxyvgNAAJgyc3mI4Bas9RHURhqFKk0tu6fcoeN45OL7FR8LbYNM/YOjI47rp0d0PFrvjHMo7xFhXse3FsALmEZwRIcBoXAaj7p6EclUarSxzmnzNcQY4FpIMeoV78P7SGIpQ+C8DK9p0cCImOTh75SX1XTvSZo63CrT2kvKfcY08/uweKX8BWxKrXsa8HdccwhrhJJAdHEZXAtGvl15uMMXicpBYSSD5okyIAvz7WVK2dV/lcS6g95FB4JYXTAFyBP3TNieJA5q24Z7tzI60EuLpdd0uDssyba6X5oMiW047p7p/JbjdbPlBpDiORzXEESwQZDuE8oQWLaHvhtmiTM6EGOPDWbCTdSvfUfLZi9jlgOAIuRMgdJWsQ9rZaCA59xYAOEgFogaxaRz9FXYb35N4LDkG8ghxJHAEwBA1BygTM+mgsGz8Nnd/aPMfl9fNCbOwD39B959z6NnU8OkeislFjWNDWCAPqTzKKKvcryTUY9K5F+0yM7Y/CR7x+qXUmbjRewhNca3Q9fZKVudlDiefKdSTw6XRl+nl/b+BY3FtDsl/KBPAOMXy8bNFwOIRz221lQYalJDQ0AvBcAbZhAIa4iLxN4Pmi+oKzNezMLW4jpPzXBYcvVJoN2e7fPb9f2XO3MH9pReyYzsc2eWYET71Js52878rffKKxLMwtqpENT+RnzjjsA6jUfTf5mmDYj3Hh9XQ8K9/xKwgbWY8C72EHkTTIj/1cPYqQWqCIu0dUyikG1EtJItwv7EUWBI7cwt1BE6La7r1S+JER71iOwCE4UE+b2qWlTIc06xOnPgmAaCo6zoEBdKNAxkJdtVJeNLN+JKABRG0vP6D5oZqpfIxHgKwdTK9juR+Jj5q34l7zHVUthj0V6wxzMY7os/W7NSG8G9oZ7OYcqYBhCrr9q5DCdbNx4e2SsXNjmvVWw3GS4Em1XHOEo2tctTTbNUGpZS7CwP2uJYXCWUxndIkSPIPbf8A8StHTRb6RbLKrZd/DGCNKiynAzAQ+D95xzOv6xbkrbQcB3+SX7PwpAk6m/Y/UpgxunvW2lSozG7dneJO6qF4/wBkvcxmMo2fRu7+5nGecEm3IuV3xrtGjjb4KVtMFhabg27g20R45dL4td15Xc74PMw5mIoMe2+814E3a9jgYnhBETy7qHFeM2NY9uWoyoHQW5WSTNwXcrDekzOhiEKaZwOKfQdajUMsPBrpiPg3/BC+Ldm5m/btFxZ8cuDvTQ9COST02LHpdZ9jJfRPeDvz2HMkvvYeuPK5KtiKxe5z3eZ7i53KXEkx0ui9kY40ajXjTR45tOvqNR2QAE6rbHfuvYZMUMmN45K01RmKcoy6lyi+7b2c3E0ZZBcBmpn8QI0nkR745J74OpU8XQY4ve2pRH2b2E5g0RYgO3ocBxJgtI4KpeEtpf8AYceZZ8XN+Y9eiNrYl+AxLcVTBNN+7WYOM3J7mJB/ED+JeRwQlp80tBl+YPz+v97mlkf3ILND+S/UfDRDnk1g4OENBp+TWY37yD7b9EVgthUmROeoRoXkW9GgTw1nRG4au17GvY4Oa4BwcNCDcFT5ld0pdijrk+5ueA05LXp+iwdVjtFwBDUg/uq5tkMa8wwHiRa+ZpB1tx9ycbUZuEz9QY96gpGRCmrQcM/229rtFYZVqte17qwBa8gkZIDLDQgkzAtBIj2F0ajHOLrkAACRctaIbPsRNRw+0FvM0AD7sAuLj38qNOCYRJbfmLfBd0+A8OpjCVtBmzGjJIHJFs3hHJC4BgbnYOEEC+n/ADKIZY/VlJTOXVJy8lL/AIjbLD8O58S6nvNPEXAeOstOn9oXkZC+h9qYYPY5jhLXAggjUGxXgOLw5Y9zHWLHFp7tJB/VQwoPsBkfX13RVJDuEKSiVCZLCSFixYrbKwz7YFwaL8zyUNZ8lapU8jY1cdSspsgSVzsGKSEu0/P6D5oYBE7Ru/0+ZQzFS+RhcHbArpsatNFvQR8vkqW1XnwdSD6V+BPxSOvaWLqfZjGn91CfbE6rvZW0yGkSmHiagGiySYHCGEvBxni3L5XGQxz53Sr54U2YWMDj5qm8eMMAlmnc/wCSpOxcODXYx0kOdfqBvEewL1XBMIfvCDqPXsmtLjt34FdROl0+RzR06qWk28qMMvCIkBt0+JoX160uAtIcf2+SYs0SWk2Xi+rpPvFk7c4KCUVnxp4fbiqJAjOBLDpDwLT0Ise88AqTsHHmoxzKg32blRruOokjrBB6gr1fEAZeE/qvNPGeyHYaqMbSBLJDKzRHGwPrAHQhvNDnw/1OL7f+S3i/34LcOT7c/wBPkpG2tmmjVyjym7CeLTwJ5jT2Higg269B2xgm4mgCwgmM9N3MkadJFu/ZUB08bEa8/wBlr/Rdd/VYemfvjs1/6VavD9ufp4fBtji1wc0w5pkEagjQr0DBYhmJobws4ZXt/C7jHrBB7Lz7NxTXw/tMUqlz/TfZ/Tk70m/QlD9b+nvUYvu4/fDdVy/0do8/25dMva9mXrwBtV1J78BWdJaSaJP3gblon/ID8w4K/ryjxLgnFra1ORUpHMHDzQ0zbqDcevNeheF9ssxeHbUaQHRD2/geIzDtxHQhZeLOtThWVc8SXhlmXE8cq7dvgbhbIXIJ0XTR71IALjmjLp19iX4azTPD/bY/BNazZCr+JwgzEZ3tDvuhxAFo/dSmu5XO7tIR4l4L87q7WEiaYc4MtmtAjeFieE89VZqTpbrmtc8CY1EcO1lUcYHse/cDmvptaC4jLlaGhwJLrAEO0kSOqZ+GKTwzKXwLgAAaAxqZkA5gPylDGdyaoKUaimWTCmKp6sHxKIq6iPqPooPBNP2gl026DnyCZ1RPdGyI8AtS4PJeR+P9lllf7YDcqRedKgEER1AB9q9cYbet1Sf4kYIvw4eB/pvBP5Xbht+Yt9AVBMXTPLCFpoRtLAVHtzsYXN0m3Dko34Go3zU3j0J+C7pLLTMY4WzacflKxckRYgjobLEdAMO+zErjEmBCxYrJ8FceRFtTzj8o+JQwWLEq+RpcHbVdPBdU5Hd/kFtYkvqH4X/Bfg96IfE1UyAosF5VixJQ/FEafuZYfBlAOrVXn7jBA/Mb34ae9XzC1CWtcdXEz7YWLFr6Vf20Zmo97HOEbIub81mJsIWLFeVdgHDedvdMmrFiFkxIqhvy+j+izF4Nj6bqThLXgtcDxBsVixTHZnM8q8MVS2pXwxOZtNxDSdfM4H2xPclJ/F+FaysHN/7gzOHCZDSfWZ7zzWLEOlfR9ako7Wt/+BrLvpI/JXzouhaOqxYvXLkyy+eFsW6pQyvvlOWeJAyxPYGPRc+GMScLtI0af+nW1ZMBpIc4EdiCB0dHBaWLxOmXT9Sz41xvsa2ffBB/B620rXJYsTIocvKCq0g6x4aFYsUEMV4qhLyJjnYEOBFwWkEeuq4FAU3GL34/IaD0WLFDBD8Cd4FOagWLESOQIaYEj19qT7bwjatGrTd5XNIPvIPoQCsWKTmU3Y1IBjWjQAJy6kIlYsVz5KEF4XAMdq1p7tBW1ixcSf/Z' },
        { id: 6, text: 'Card #6', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbdIrkvdhIyhPeyb_UnFNO1FkhxfgfPLFEg&usqp=CAU' },
    ];

    function renderProfileCard(item) {
        return (
                <View key={item.id} style={[styles.profileCardContainer, styles.box]}>
                    <Image width={100} height={100} source={{ uri: item.uri }} />
                    <Text>{item.text}</Text>
                    <Text>hi</Text>
                </View>
            


        )
    }

    function noMoreProfilesAvaliable(){
        return(
            <View>
                <Text> NO MORE PROFILES AVALIABLE!!!!\n try widdening your search</Text>
            </View>
        )
    }

    



    return (
        <View style={styles.discoverScreenContainer}>
            <SafeAreaView>
                <AnimatedProfileCard data={DATA} renderProfileCard={renderProfileCard} onSwipeRight={()=>{console.log("Have swiped right")}} onSwipeLeft={()=>{console.log("Have swiped left")}} noMoreProfilesAvaliable={noMoreProfilesAvaliable}/>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    discoverScreenContainer: {
        flex: 1,
        backgroundColor: 'pink'
    },
    profileCardContainer: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        // backgroundColor: 'YELLOW',
        borderColor: 'black',
        borderWidth: 2
    },
    box: {
        height: WINDOW_HEIGHT,
        width: WINDOW_WIDTH,
        // backgroundColor: 'blue',
        borderRadius: 5,
    }

})