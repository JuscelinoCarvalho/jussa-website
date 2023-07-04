import { Component } from '@angular/core';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})

/*
function MovieCard("{movie}" : "Props"){
  return(
  <div>
      <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
      <div className="dsmovie-card-bottom-container">
          <h3>{movie.title}</h3>
          <MovieScore count={movie.count} score={movie.score}/>
          <Link to={`/form/${movie.id}`}>
              <div className="btn btn-primary dsmovie-btn">Avaliar</div>
          </Link>
      </div>
  </div>

  );*/

export class EntrevistasComponent {
  public videoPhenom100 = "../../assets/video/Phenom100.mp4"
  public videoDecolagemCessna210 = "../../assets/video/DecolagemLow.mp4"
  public videoJussaPousoSkylane = "../../assets/video/EuPousandoSkylane.mp4"
}
